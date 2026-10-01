export const machineLearning = {
    slug: 'machine-learning',
    meta: 'Machine Learning',
    title: 'Machine Learning',
    summary: 'Random notes on machine learning that contains ml concepts, algorithms, and techniques.',
    content: [
      {
        title: 'Linear Regression',
        body: `**Linear Regression Model Prediction**

$$
\\hat{y}=\\theta_{1}x_{1}+\\theta_{2}x_{2}+\\dots+\\theta_{n}x_{n}
$$

where:
- $\\boldsymbol{\\hat{y}}$ is the predicted value.
- $\\boldsymbol{n}$ is the number of features.
- $\\boldsymbol{x_{i}}$ is the $i^{\\text{th}}$ feature value.
- $\\boldsymbol{\\theta_{j}}$ is the $j^{\\text{th}}$ model parameter, including the bias term $\\boldsymbol{\\theta_{0}}$ and the feature weights $\\boldsymbol{\\theta_{1}}, \\boldsymbol{\\theta_{2}}, \\dots, \\boldsymbol{\\theta_{n}}$.

**Linear Regression Model Prediction *(Vectorized Form)***

$$
\\hat{y}=h_{\\theta}(x)=\\theta \\cdot x
$$
where:
- $\\boldsymbol{h_{\\theta}}$ is the hypothesis function, using the models parameters $\\theta$.
- $\\boldsymbol{\\theta}$ is the model's **parameter vector**, containing the bias term $\\theta_{0}$ and the feature weights $\\theta_{1}$ to $\\theta_{n}$.
- $\\boldsymbol{x}$ is the instance's **feature vector**, containing $x_{1}$ to $x_{n}$ with $x_{0}$ always equal to $1$.
- $\\boldsymbol{\\theta \\cdot x}$ is the dot product of the vectors $\\theta$ and $x$, which is equal to $\\hat{y}=\\theta_{1}x_{1}+\\theta_{2}x_{2}+\\dots+\\theta_{n}x_{n}$.


**How do we train a Linear Regression model?**

The most common performance measure of a regression model is the root mean square error $\\boldsymbol{RMSE}$. Therefore, to train a linear regression model, we need to find the value of $\\boldsymbol{\\theta}$ that minimizes the $\\boldsymbol{RMSE}$. In practice, it is simpler to minimize the mean squared error $\\boldsymbol{MSE}$ than $\\boldsymbol{RMSE}$, and it leads to the same result (because the value that minimizes a positive function also minimizes its square root).

***THE NORMAL EQUATION***

To find the value of $\\theta$ that minimizes the $MSE$, there exist a **closed-form solution**, in other words, a mathematical equation that gives the result directly. This is called the **Normal Equation**.

$$
\\hat{\\theta}=(X^TX)^{-1}X^Ty
$$

where:
- $\\boldsymbol{\\hat{\\theta}}$ is the value of $\\theta$ that minimizes the cost function.
- $\\boldsymbol{y}$ is the vector of target values containing $y^{(i)}$ to $y^{(m)}$.

For example, using a small dataset:
\`\`\`python
import numpy as np

X = np.array([[1], [2], [3], [4]], dtype=float)
y = np.array([2, 4, 6, 8], dtype=float)

# Add a column of 1s for the bias term.
X_b = np.c_[np.ones((len(X), 1)), X]

theta_best = np.linalg.inv(X_b.T @ X_b) @ X_b.T @ y
theta_best
\`\`\`

Or using \`sklearn\`:
\`\`\`python
from sklearn.linear_model import LinearRegression

lin_reg = LinearRegression()
lin_reg.fit(X, y)
lin_reg.intercept_, lin_reg.coef_
\`\`\`

The Normal equation computes the inverse of $X^TX$, which is an $(n+1)\\times(n+1)$ matrix **(where $n$ is the number of features)**. The **computational complexity** of inverting such matrix is typically about $O(n^{2.4})$ to $O(n^{3})$, depending on the implementation. In other words, if we double the number of features, we multiply the computation time by roughly $2^{2.4}=5.3$ to $2^{3}=8$.
`
    },
    {
      title: 'Polynomial Regression',
      body: ` **Definition**
      
In statistics, **polynomial regression** is a form of regression analysis in which the relationship between the independent variable $x$ in the dependent variable $y$ is modeled as polynomial in $x$. Polynomial regression fits a nonlinear relationship between the value of $x$ and the corresponding conditional mean of $y$, denoted $E(y|x)$. Although polynomial regression first a nonlinear model to the data, as a statistical estimation problem it is linear, in the sense that the regression function $E(y|x)$ is linear in the unknown parameters that are estimated from the data. Thus, **polynomial regression is a special case of multiple linear regression**.

The explanatory (independent) variables resulting from the polynomial expansion of the "baseline" variables are known as **higher-degree terms**. Such variables are also used in classification settings.

In general, we can model the expected value of $y$ as an $n^{\\text{th}}$ degree polynomial, yielding the general polynomial regression model, 

$$
y= \\beta_{0}+\\beta_{1}x+\\beta_{2}x^{2}+\\beta_{3}x^{3}+\\dots+\\beta_{n}x^{n}+\\epsilon
$$

where:
- $\\boldsymbol{y}$ is the dependent variable (the response or outcome being predicted).
- $\\boldsymbol{n}$ is the degree of the polynomial model (the highest exponent of $x$).
- $\\boldsymbol{x}$ is the single independent variable (or baseline feature).
- $\\boldsymbol{x^k}$ (such as $x^2, x^3, \dots, x^n$) are the higher-degree polynomial terms derived from $x$, representing non-linear features.
- $\\boldsymbol{\\beta_0}$ is the $y$-intercept term (the expected value of $y$ when $x = 0$).
- $\\boldsymbol{\\beta_1}, \\boldsymbol{\\beta_2}, \\dots, \\boldsymbol{\\beta_n}$ are the unknown regression coefficients (parameters) to be estimated, where each represents the weighting of its corresponding polynomial term.
- $\\boldsymbol{\\epsilon}$ (epsilon) is the unobserved random error term (residuals), accounting for variability in $y$ not explained by the polynomial relationship (assumed to have a mean of zero).

**Note on Terminology:** In single-variable polynomial regression, $n$ represents the **degree of the polynomial** (how complex the curve is) rather than distinct input features. However, computationally, each power $x^k$ is treated as an individual feature in a **multiple linear regression** framework.

Conveniently, this model is a linear from the point of view of estimation, since the regression function is linear in terms of unknown parameters $\\beta_{0},\\beta_{1},\\dots$ Therefore, for least squares analysis, the computational and inferential problems of polynomial regression can be completely addressed using the techniques of multiple regression. This is done by treating $x, x^2, \\dots$ as being distinct independent variables in a multiple regression model.

**Matrix form and Calculation of Estimates**

The polynomial regression model 

$$
y_{i}=\\beta_{0}+B_{1}x_{i}+\\beta_{2}x_{i}^{2}+\\dots+\\beta_{m}x_{i}^{m}+\\epsilon_{i} \\ (i=1,2,\\dots,n)
$$

can be expressed in matrix form in terms of a design matrix $X$, a response vector $\\vec{y}$, a parameter $\\vec{B}$, and a vector $\\vec{\\epsilon}$ of random errors. The $i$-th row of $X$ and $\\vec{y}$ will contain the $x$ and $y$ value for the $i$-th data sample. Then the model can be written as a system of linear equations:

$$
\\begin{bmatrix} 
y_1 \\\\ 
y_2 \\\\ 
y_3 \\\\ 
\\vdots \\\\ 
y_n 
\\end{bmatrix} 
= 
\\begin{bmatrix} 
1 & x_1 & x_1^2 & \\dots & x_1^m \\\\ 
1 & x_2 & x_2^2 & \\dots & x_2^m \\\\ 
1 & x_3 & x_3^2 & \\dots & x_3^m \\\\ 
\\vdots & \\vdots & \\vdots & \\ddots & \\vdots \\\\ 
1 & x_n & x_n^2 & \\dots & x_n^m 
\\end{bmatrix} 
\\begin{bmatrix} 
\\beta_0 \\\\ 
\\beta_1 \\\\ 
\\beta_2 \\\\ 
\\vdots \\\\ 
\\beta_m 
\\end{bmatrix} 
+ 
\\begin{bmatrix} 
\\varepsilon_1 \\\\ 
\\varepsilon_2 \\\\ 
\\varepsilon_3 \\\\ 
\\vdots \\\\ 
\\varepsilon_n 
\\end{bmatrix}
$$

which when using pure matrix notation is written as, 

$$
\\vec{y}=X \\vec{\\beta} + \\vec{\\epsilon}
$$

where:
- $\\boldsymbol{\\vec{y}}$ is the column vector of size $n \\times 1$ called the **Response/Target Vector**, containing all observed values of the dependent variable for $n$ data points.
- $\\boldsymbol{X}$ is a matrix of size $n \times (m+1)$ called the **Design/Feature Matrix**, where each row represents an observation and each column represents a polynomial power of $x$.
- $\\boldsymbol{\\vec{\\beta}}$ is a column vector of size $(m+1)\\times 1$ called the **Parameter/Coefficient Vector** containing the unknown regression coefficients to be estimated.
- $\\boldsymbol{\\epsilon}$ is a column vector of size $n \\times 1$ called the **Error/Residual Vector** containing the random errors for each data sample.

The vector of estimated polynomial regression coefficients (using ordinary least squares estimation) is, 

$$
\\hat{\\vec{\\beta}}=(X^TX)^{-1}X^T \\vec{y}
$$

assuming $m<n$ which is required for the matrix to be invertible; This is the unique least-square solution. In other words, it realizes the minimum distance $||\\vec{\\epsilon}||$ between the sample $y_{i}$ and the corresponding value of the polynomial, $\\sum_{k=1}^{m}\\beta_{k}x_{i}^{k}$, that is, it realizes the minimum, 

$$
\\min_{{\\vec{\\beta}}} \\sum_{i=1}^{n}\\left(y_{i} - \\sum_{k=1}^{m}\\beta_{k} x_{i}^{k} \\right)^{2}
$$
`
    },
    {
      title: 'Regression Performance Measures',
      body: `### Coefficient of Determination ($R^2$ Score)

$$
R^2(X, h) = 1 - \\frac{\\sum_{i=1}^{m} (y^{(i)} - h(x^{(i)}))^2}{\\sum_{i=1}^{m} (y^{(i)} - \\bar{y})^2} \\qquad \\text{OR } \\qquad R^{2}=1-\\frac{SS_{res}}{SS_{tot}}
$$

where:
- $\\boldsymbol{\\mathbf{R^2(X, h)}}$ is the  $R^2$ score (Coefficient of Determination), measuring the proportion of variance in the dependent variable that is predictable from the independent variables using model $h$.
- $\\boldsymbol{1}$ is the maximum possible baseline score representing a perfect fit (where $100\\%$ of the variance is explained by the model).
- $\\boldsymbol{m}$ is the total number of instances (data points or sample size) in dataset $X$.
- $\\boldsymbol{h(x^{(i)})}$ is the predicted target value generated by model $h$ for the $i^{\\text{th}}$ sample.
- $\\boldsymbol{y^{(i)}}$ is the actual ground-truth target value for the $i^{\\text{th}}$ sample.
- $\\boldsymbol{\\bar{y}}$ is the mean (average) value of all actual target values across the dataset, calculated as $\\bar{y} = \\frac{1}{m}\\sum_{i=1}^{m} y^{(i)}$.
- $\\boldsymbol{\\sum_{i=1}^{m} (y^{(i)} - h(x^{(i)}))^2}$ is the **Residual Sum of Squares ($SS_{\\text{res}}$)**. It sums up the squared errors between the actual values and the model's predictions.
- $\\boldsymbol{\\sum_{i=1}^{m} (y^{(i)} - \\bar{y})^2}$ is the **Total Sum of Squares ($SS_{\\text{tot}}$)**. It measures the total variance of the actual target values around their mean (equivalent to the performance of a naive baseline model that always predicts the average value $\\bar{y}$).
- $\\boldsymbol{\\frac{\\sum (y^{(i)} - h(x^{(i)}))^2}{\\sum (y^{(i)} - \\bar{y})^2}}$ is the ratio of residual error to total variance, indicating the fraction of variation that your model failed to explain. Subtracting this fraction from $1$ leaves the fraction of variance successfully explained by the  model.
      
### Root Mean Square Error $(RMSE)$

$$
\\boldsymbol{RMSE}(X, h)=\\sqrt{ \\frac{1}{m}\\sum_{i=1}^{m} (h(x^{(i)})-y^{(i)})^2}
$$

where:
- $\\boldsymbol{RMSE}(X,h)$ is the Root Mean Square Error function, evaluated on the dataset $X$ using the hypothesis or machine learning model $h$.
- $\\boldsymbol{m}$ is the total number of instances (data points or sample size) in the dataset.
- $\\boldsymbol{X}$ is a matrix containing all the feature values (excluding the labels) of all instances is the dataset.
- $\\boldsymbol{h}$ is the system's prediction function, also known as the **hypothesis**. Given a set of features $x^{(i)}$, is outputs a predicted value $\\hat{y}^{(i)}=h(x^{(i)})$.
- $\\boldsymbol{x}^{(i)}$ is a vector containing all feature values of the $i^{\\text{th}}$ data instance in the dataset.
- $\\boldsymbol{y}^{(i)}$ is the actual target value for the $i^{th}$ data instance.
- $\\boldsymbol{\\sum}_{i=1}^{m}$ is an instruction to calculate the square difference for every instance from $i=1$ to $i=m$ and sum them all up.
- $\\boldsymbol{(h(x^{(i)})-y^{(i)})^{2}}$ is the **square error** for the $i^{\\text{th}}$ sample. Subtracting the true label $y^{(i)}$ from the predicted value $h(x^{(i)})$ gives the error, which is then squared to ensure all values are positive and to punish large errors move heavily.
- $\\boldsymbol{\\frac{1}{m}}$ divides the total sum of squared errors by the number of instances $m$, yielding the **Mean Squared Error $(MSE)$**.
- $\\boldsymbol{\\sqrt{}}$ is applied over the entire mean squared error $(MSE)$, bringing the unit of measurement back down to the target variable's original scale.


### Mean Absolute Error $(MAE)$

$$
\\boldsymbol{MAE}(X,h)=\\frac{1}{m}\\sum_{i=1}^{m}|h(x^{(i)}-y^{(i)})|
$$

where:
- $\\boldsymbol{MAE}(X,h)$ is the Mean Absolute Error function, calculated over dataset $X$ using hypothesis model $h$.
- $\\boldsymbol{m}$ is the total number of instances (data points or sample size) in the dataset.
- $\\boldsymbol{X}$ is a matrix containing all the feature values (excluding the labels) of all instances is the dataset.
- $\\boldsymbol{h}$ is the system's prediction function, also known as the **hypothesis**. Given a set of features $x^{(i)}$, is outputs a predicted value $\\hat{y}^{(i)}=h(x^{(i)})$.
- $\\boldsymbol{x}^{(i)}$ is a vector containing all feature values of the $i^{\\text{th}}$ data instance in the dataset.
- $\\boldsymbol{y}^{(i)}$ is the actual target value for the $i^{th}$ data instance.
- $\\boldsymbol{\\sum}_{i=1}^{m}$ is an instruction to calculate the absolute difference for every instance from $i=1$ to $i=m$ and sum them all up.
- $\\boldsymbol{\\|h(x^{(i)}) - y^{(i)}\\|}$ is the **absolute error** for the $i^{\\text{th}}$ sample. The vertical bars $\\vert{}\\cdot\\vert{}$ take the absolute value of the difference between prediction and actual target, turning all negative errors into positive numbers so they don't cancel each other out.
- $\\boldsymbol{\\frac{1}{m}}$ multiplies (or divides) the total sum of absolute errors by the number of instances $m$ to calculate the average (mean) error across the entire dataset.
`
    }
    ]

};
