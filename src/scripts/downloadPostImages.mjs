/* eslint-disable no-restricted-syntax, no-await-in-loop, no-continue */
import * as path from 'path';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as stream from 'stream';

/**
 * @param {Error} err
 */
function logError(err) {
  console.error(err.message);
}

/**
 * @param {string} message
 */
function logInfo(message) {
  console.log(message);
}

/**
 * @param {string} dir
 * @returns {Promise<string[]>}
 */
async function getDirFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const dirPath = path.resolve(dir, dirent.name);
      return dirent.isDirectory() ? getDirFiles(dirPath) : dirPath;
    }),
  ).catch(logError);
  return Array.prototype.concat(...files);
}

/**
 * @param {string} url
 * @param {string} dest
 * @returns {Promise<Error | boolean>}
 */
async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const transport = url.startsWith('https') ? https : http;
    transport.request(url, (response) => {
      const data = new stream.Transform();
      response.on('data', (chunk) => {
        data.push(chunk);
      });
      response.on('end', () => {
        fs.writeFileSync(dest, data.read());
        resolve(true);
      });
    }).on('error', (err) => {
      logError(err);
      reject(err);
    }).end();
  });
}

async function main() {
  const postsDir = 'src/posts';
  logInfo(`Traversing the ${postsDir} folder`);
  const allFiles = await getDirFiles(postsDir);
  logInfo(`Total files found: ${allFiles.length}\n`);
  if (!allFiles.length) {
    return;
  }

  logInfo('Searching for *.md files');
  const mdRegex = /.+\.md$/i;
  const mdFiles = allFiles.filter((filePath) => mdRegex.test(filePath));
  logInfo(`Total *.md files found: ${mdFiles.length}\n`);
  if (!mdFiles.length) {
    return;
  }

  logInfo('Looking for external images in *.md files');
  for (const mdFilePath of mdFiles) {
    logInfo(`\nParsing: ${mdFilePath}`);
    /** @type {Buffer} */
    const mdContent = await fs.promises.readFile(mdFilePath);
    const externalImageRegex = /!\[.*]\((http.*)\)/ig;
    if (!externalImageRegex.test(mdContent.toString())) {
      logInfo('No external images found');
      continue;
    }

    let matches = externalImageRegex.exec(mdContent.toString());
    if (matches === null) {
      logInfo('No external images parsed');
      continue;
    }

    let imageIdx = 50;
    let mdContentUpdated = mdContent.toString();
    while (matches !== null) {
      const imgUrl = matches[1];
      logInfo(`\nFound external image: ${imgUrl}`);

      const allowedExtensions = ['png', 'gif', 'jpg', 'jpeg', 'svg'];
      const imgExtension = imgUrl.split('.').pop().toLowerCase();
      if (allowedExtensions.includes(imgExtension)) {
        const assetsFolder = 'assets';
        const imgName = `${imageIdx}.${imgExtension}`;
        const imgPath = path.join(path.dirname(mdFilePath), assetsFolder, imgName);
        const result = await downloadFile(imgUrl, imgPath);
        if (result instanceof Error) {
          logError(result);
        } else {
          logInfo(`File downloaded to ${imgPath}`);
        }

        logInfo('Updating the content of *.md file');
        mdContentUpdated = mdContentUpdated.replace(imgUrl, `${assetsFolder}/${imgName}`);
      } else {
        logError(new Error(`Not supported image extension for the file ${imgUrl}`));
      }
      imageIdx += 1;
      matches = externalImageRegex.exec(mdContent.toString());
    }
    if (mdContentUpdated !== mdContent.toString()) {
      logInfo('Updating and saving the *.md file');
      await fs.promises.writeFile(mdFilePath, mdContentUpdated);
    } else {
      logInfo('The *.md file is not changed');
    }
  }
}

logInfo('START downloading post images\n');
main()
  .then(() => logInfo('\nSTOP downloading post images'))
  .catch(logError);
