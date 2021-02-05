---
title: "Homemade Machine Learning in Python"

summary: "MatLab/Octave examples of popular machine learning algorithms with code examples and mathematics being explained"

cover: assets/01-cover.png

date: 2018-12-21

---

![Homemade Machine Learning in Python](assets/01-cover.png)

<center><i>
The source of the following machine learning topics map is <a href="https://vas3k.ru/blog/machine_learning/">this wonderful blog post</a>.
</i></center>

I’ve recently launched [Homemade Machine Learning](https://github.com/trekhleb/homemade-machine-learning) repository that contains examples of popular machine learning algorithms and approaches (like _linear/logistic regressions, K-Means clustering, neural networks_) implemented in **Python** with mathematics behind them being explained. Each algorithm has interactive **Jupyter Notebook** demo that allows you to play with training data, algorithms configurations and immediately see the results, charts and predictions **right in your browser**. In most cases the explanations are based on [this great machine learning course](https://www.coursera.org/learn/machine-learning) by [Andrew Ng](https://medium.com/@andrewng).

The purpose of the repository was _not_ to implement machine learning algorithms by using 3rd party library “one-liners” _but_ rather to practice implementing these algorithms from scratch and get better understanding of the mathematics behind each algorithm. That’s why all algorithms implementations are called “homemade”.

The main Python libraries that are used there are [NumPy](http://www.numpy.org/) and [Pandas](https://pandas.pydata.org/). These two are used for efficient matrix operations and for loading/parsing CSV datasets. When it comes to [Jupyter Notebook](http://jupyter.org/) demos then such libraries as [Matplotlib](https://matplotlib.org/) and [Plotly](https://plot.ly/) are being used for data visualizations.

Currently, the following topics have been covered:

## Regression: Linear Regression

In regression problems we do real value predictions. Basically we try to draw a line/plane/n-dimensional plane along the training examples.

_Usage examples: stock price forecast, sales analysis, dependency of any number, etc._

*   📗 [Linear Regression Math](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/linear_regression)  —  theory and links for further readings
*   ⚙️ [Linear Regression Implementation Example](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/linear_regression/linear_regression.py)
*   ▶️ [Demo | Univariate Linear Regression](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/linear_regression/univariate_linear_regression_demo.ipynb)  —  predict `country happiness` score by `economy GDP`
*   ▶️ [Demo | Multivariate Linear Regression](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/linear_regression/multivariate_linear_regression_demo.ipynb)  —  predict `country happiness` score by `economy GDP` and `freedom index`
*   ▶️ [Demo | Non-linear Regression](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/linear_regression/non_linear_regression_demo.ipynb)  —  use linear regression with _polynomial_ and _sinusoid_ features to predict non-linear dependencies.

## Classification: Logistic Regression

In classification problems we split input examples by certain characteristic.

_Usage examples: spam-filters, language detection, finding similar documents, handwritten letters recognition, etc._

*   📗 [Logistic Regression Math](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/logistic_regression)  —  theory and links for further readings
*   ⚙️ [Logistic Regression Implementation Example](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/logistic_regression/logistic_regression.py)
*   ▶️ [Demo | Logistic Regression (Linear Boundary)](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/logistic_regression/logistic_regression_with_linear_boundary_demo.ipynb)  —  predict Iris flower `class` based on `petal_length` and `petal_width`
*   ▶️ [Demo | Logistic Regression (Non-Linear Boundary)](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/logistic_regression/logistic_regression_with_non_linear_boundary_demo.ipynb)  —  predict microchip `validity` based on `param_1` and `param_2`
*   ▶️ [Demo | Multivariate Logistic Regression](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/logistic_regression/multivariate_logistic_regression_demo.ipynb)  —  recognize handwritten digits from `28x28` pixel images.

## Clustering: K-means Algorithm

In clustering problems we split the training examples by unknown characteristics. The algorithm itself decides what characteristic to use for splitting.

_Usage examples: market segmentation, social networks analysis, organize computing clusters, astronomical data analysis, image compression, etc._

*   📗 [K-means Algorithm Math](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/k_means)  —  theory and links for further readings
*   ⚙️ [K-means Algorithm Implementation Example](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/k_means/k_means.py)
*   ▶️ [Demo | K-means Algorithm](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/k_means/k_means_demo.ipynb)  —  split Iris flowers into clusters based on `petal_length` and `petal_width`

## Neural Networks: Multilayer Perceptron (MLP)

The neural network itself isn’t an algorithm, but rather a framework for many different machine learning algorithms to work together and process complex data inputs.

_Usage examples: as a substitute of all other algorithms in general, image recognition, voice recognition, image processing (applying specific style), language translation, etc._

*   📗 [Multilayer Perceptron Math](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/neural_network)  —  theory and links for further readings
*   ⚙️ [Multilayer Perceptron Implementation Example](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/neural_network/multilayer_perceptron.py)
*   ▶️ [Demo | Multilayer Perceptron](https://nbviewer.jupyter.org/github/trekhleb/homemade-machine-learning/blob/master/notebooks/neural_network/multilayer_perceptron_demo.ipynb)  —  recognize handwritten digits from `28x28` pixel images.

## Anomaly Detection: Gaussian Distribution

Anomaly detection (also outlier detection) is the identification of rare items, events or observations which raise suspicions by differing significantly from the majority of the data.

_Usage examples: intrusion detection, fraud detection, system health monitoring, removing anomalous data from the dataset etc._

*   📗 [The Math Behind Anomaly Detection using Gaussian Distribution](https://github.com/trekhleb/homemade-machine-learning/blob/master/homemade/anomaly_detection)

> I hope you’ll find [the repository](https://github.com/trekhleb/homemade-machine-learning) useful. Either by playing with demos or by reading the math sections or by simply exploring the source code. Happy coding!
