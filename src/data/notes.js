export const notes = [
  {
    slug: 'linear-algebra-concepts',
    meta: 'Mathematics',
    title: 'Linear Algebra Concepts',
    summary: 'A collection of linear algebra concepts that I find particularly interesting or useful.',
    content: [
      {
        title: 'Dimension of the Four Subspaces',
        body: `The four fundamental subspaces of a matrix are the row space, column space, nullspace, and left nullspace. Each of these subspaces has a specific dimension and is related to the properties of the matrix.

![The four fundamental subspaces of a matrix](/notes/four-fundamental-subspaces.png)

1. The row space is $C(A^T)$, a subspace of $R^n$.
2. The column space is $C(A)$, a subspace of $R^m$.
3. The nullspace is $N(A)$, a subspace of $R^n$.
4. The left nullspace is $N(A^T)$, a subspace of $R^m$.

The row space and column space have the same dimension $r$ ($r$ = rank of the matrix). 
$N(A)$ and $N(A^{T})$ have dimensions $n-r$ and $m-r$, respectively. The rank-nullity theorem states that the sum of the rank and nullity of a matrix equals the number of columns of the matrix. This is one of the *fundamental theorems* of linear algebra.

`,

      },
      {
        title: 'Orthogonality of the Four Subspaces',
        body: `Every vector $x$ in the nullspace is perpendicular to every row of $A$, because $Ax = 0$.
        **The nullspace $N(A)$ and the row space $C(A^{T})$ are orthogonal subspaces of $R^{n}$.**

To see why $x$ is perpendicular to the rows, look at $Ax=0$. Each row multiplies $x$:

$$
Ax =
\\begin{bmatrix}
\\text{row 1}\\\\
\\vdots\\\\
\\text{row }m
\\end{bmatrix}
\\begin{bmatrix}
x_1\\\\
\\vdots\\\\s
x_m
\\end{bmatrix}
=
\\begin{bmatrix}
0\\\\
\\vdots\\\\
0
\\end{bmatrix}
$$

The first equation says that row 1 is perpendicular to $x$. The last equation says that row $m$ is perpendicular to $x$. **Every row has a zero dot product with $x$**. Then $x$ is also perpendicular to every combination of the rows. The whole row space $C(A^T)$ is orthogonal to the nullspace $N(A)$.
        
Every vector $y$ in the nullspace of $A^{T}$ is perpendicular to ever column of $A$.
**The left nullspace $N(A^{T})$ and the column space $C(A)$ are orthogonal subspaces of $R^{m}$.**

For the same reason, $y$ is perpendicular to every combination of the columns. The whole column space $C(A)$ is orthogonal to the left nullspace $N(A^{T})$.


$$
A^{T}y =
\\begin{bmatrix}
\\text{(col 1)}^{T}\\\\
\\vdots\\\\
\\text{(col }n)^{T}
\\end{bmatrix}
\\begin{bmatrix}
y_1\\\\
\\vdots\\\\
y_m
\\end{bmatrix}
=
\\begin{bmatrix}
0\\\\
\\vdots\\\\
0
\\end{bmatrix}
$$

The dot product of $y$ with every column of $A$ is zero. Then $y$ in the left nullspace is perpendicular to each column of $A$ and to the whole column space.

![two pairs of orthogonal subspaces](/notes/two-pairs-of-orthogonal-subspaces.png)

$N(A)$ is the orthogonal complement of $C(A^{T})$ in $R^{n}$, and $N(A^{T})$ is the orthogonal complement of $C(A)$ in $R^{m}$. This is also one of the *fundamental theorems* of linear algebra.
`,
      },
      {
        title: 'Projections and Least Squares Approximation',
        body: 'Projections are used to find the closest point in a subspace to a given vector. The least squares approximation is a method for finding the best fit line or plane to a set of data points.',
      },
      {
        title: 'Orthonormal Bases and the Gram-Schmidt Process',
        body: 'An orthonormal basis is a set of vectors that are mutually orthogonal and have unit length. The Gram-Schmidt process is a method for constructing an orthonormal basis from a given set of vectors.',
      },
     {
        title: 'Cramer\'s Rule',
        body: 'Cramer\'s Rule is a method for solving systems of linear equations using determinants.',
     },
     {
        title: 'Eigenvalues and Eigenvectors',
        body: 'Eigenvalues and eigenvectors are important concepts in linear algebra that describe the behavior of a matrix under linear transformations.',
     },
     {
        title: 'Symmetric Matrices and Positive Definiteness',
        body: 'Symmetric matrices have real eigenvalues and orthogonal eigenvectors. A symmetric matrix is positive definite if all its eigenvalues are positive.',
     },
     {
        title: 'Singular Value Decomposition (SVD) and Principal Component Analysis (PCA)',
        body: 'Singular Value Decomposition (SVD) is a factorization of a matrix into three matrices. Principal Component Analysis (PCA) is a technique for dimensionality reduction that uses SVD.',
     }

    ],
  },  
  {
    slug: 'calculus-concepts',
    meta: 'Mathematics',
    title: 'Calculus Concepts',
    summary: 'A collection of calculus concepts that I find particularly interesting or useful.',
    content: [
      {
        title: 'The Definition of the Limits',
        body: 'The limit of a function describes the behavior of the function as the input approaches a certain value. It is a fundamental concept in calculus that is used to define continuity, derivatives, and integrals.',
      },
      {
        title: 'Derivative Rules and Techniques',
        body: 'The derivative of a function measures the rate at which the function changes with respect to its input. There are various rules and techniques for finding derivatives, including the power rule, product rule, quotient rule, and chain rule.',
      },
      {
        title: 'Chain Rule',
        body: 'The chain rule is a formula for computing the derivative of the composition of two or more functions. It states that the derivative of a composite function is the product of the derivatives of the individual functions.',
      }
    ],
  },
  {
    slug: 'machine-learning',
    meta: 'Machine Learning',
    title: 'Machine Learning',
    summary: 'My notes on machine learning concepts, algorithms, and techniques that I currently know and understand.',
    content: [
      {
        title: 'The Machine Learning Pipeline',
        body: 'The machine learning pipeline is a series of steps that are followed to build and deploy a machine learning model. It typically includes data collection, data preprocessing, feature engineering, model selection, training, evaluation, and deployment.',
      },
      {
        title: 'Learning Algorithms and Techniques',
        body: 'There are various learning algorithms and techniques used in machine learning, including supervised learning, unsupervised learning, reinforcement learning, and deep learning. Each approach has its own strengths and weaknesses and is suited for different types of problems.',
      },
      {
        title: 'Online Learning and Batch Learning',  
        body: 'Online learning is a machine learning approach where the model is updated incrementally as new data arrives. Batch learning, on the other hand, involves training the model on the entire dataset at once. Online learning is useful for streaming data and real-time applications, while batch learning is suitable for static datasets.',
      },
      {
        title: 'Evaluation Metrics and Model Selection',
        body: 'Evaluation metrics are used to assess the performance of a machine learning model. Common metrics include accuracy, precision, recall, F1 score, and area under the ROC curve. Model selection involves choosing the best model based on these evaluation metrics and other considerations such as complexity and interpretability.',
      },
      {
        title: 'Data Preprocessing and Feature Engineering',
        body: 'Data preprocessing involves cleaning and transforming raw data into a format suitable for analysis. Feature engineering is the process of creating new features or modifying existing ones to improve the performance of machine learning models. Both steps are crucial for building effective models.',
      },
      {
        title: 'Regularization and Overfitting',
        body: 'Regularization is a technique used to prevent overfitting in machine learning models by adding a penalty term to the loss function. Overfitting occurs when a model learns the training data too well, capturing noise and leading to poor generalization on new data. Common regularization techniques include L1 and L2 regularization.',
      },
    ]
  },
  {
    slug: 'my-learning-process',
    meta: 'Reflection',
    title: 'How I learn and improve my skills',
    summary: 'A reflection on my learning process and how I approach improving my skills in various domains.',
    content: [],
  },
];
