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

**he row space and column space have the same dimension $r$ ($r$ = rank of the matrix). 
$N(A)$ and $N(A^{T})$ have dimensions $n-r$ and $m-r$, respectively**. The **rank-nullity theorem** states that the sum of the rank and nullity of a matrix equals the number of columns of the matrix. This is part of the *fundamental theorems of linear algebra*`,
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

$N(A)$ is the orthogonal complement of $C(A^{T})$ in $R^{n}$, and $N(A^{T})$ is the orthogonal complement of $C(A)$ in $R^{m}$. This is also part of the *fundamental theorems* of linear algebra.`,
      },
      {
        title: 'Projections and Least Squares Approximation',
        body: `Variables that define the key elements of **Projections** and **Least Squares Approximation**.

**$\\hat{x}$("x-hat", Least-Squares Solution):** The best parameter vector in $R^{n}$ that minimizes the distance between $Ax$ and $b$. Calculated via the normal equation: 

$$
\\hat{x} = (A^{T}A)^{-1}A^{T}b
$$

**$p$ (Projection Vector):** The closest vector inside the column space $C(A)$ to $b$. It represents the model's predicted target values:

$$
p=A\\hat{x} = A(A^{T}A)^{-1}A^{T}b
$$

**$e$ (Error/Residual Vector):** The difference between that actual vector $b$ and the projection $p$:

$$
e=b-p=b-A\\hat{x}
$$ 
The error vector $e$ is perpendicular (orthogonal) to the column space of $A$ ($e \\in \\text{Null}(A^{T})$).

**Core Relationship:** $$b=p+e=A\\hat{x}+e$$

**$P$ (Projection Matrix)**: The matrix that projects any vector onto the column space of $A$ is:

$$
P = A(A^{T}A)^{-1}A^{T}
$$

so that

$$
p = Pb
$$


**Geometric Interpretation:** The least-squares solution chooses $x$ so that $Ax$ is the orthogonal projection of $b$ onto the column space $C(A)$. This means it finds the closest point in $C(A)$ to $b$, minimizing the squared distance:

$$
\\min_x \|b-Ax\|^2
$$

The residual vector $e=b-Ax$ is orthogonal to every vector in the column space, which gives the condition:

$$
A^{T}(b-Ax)=0
$$

Rearranging yields the normal equation:

$$
A^{T}A\\hat{x}=A^{T}b
$$

If $A$ has full column rank, then $A^{T}A$ is invertible and the least-squares solution is unique. If $b \\in C(A)$, then $e=0$ and the system is solved exactly.

***PROJECTION ONTO A SUBSPACE***

Given a subspace $S = \\text{span}\\{a_1, a_2, \\ldots, a_n\\}$ and a vector $b \\in \\mathbb{R}^m$, we want the vector $p \\in S$ closest to $b$. If $A$ is the matrix whose columns are $a_1, a_2, \\ldots, a_n$, then we solve

$$
\\hat{x} = \\arg\\min_x \\|Ax-b\\|_2
$$

and set

$$
p = A\\hat{x}.
$$

This $p$ is the orthogonal projection of $b$ onto the column space of $A$. The residual $b-p$ is perpendicular to the subspace, so

$$
A^T(b-p)=0.
$$

Since $p=A\\hat{x}$, this becomes the normal equation:

$$
A^T(b-A\\hat{x}) = 0 \\ \\implies \\ A^T A \\hat{x} = A^T b.
$$

When $A$ has full column rank, $A^T A$ is invertible, and the unique least-squares solution is

$$
\\hat{x} = (A^T A)^{-1} A^T b.
$$

Therefore, the projection of $b$ onto the subspace is

$$
p = A\\hat{x} = A(A^T A)^{-1} A^T b.
$$

The corresponding projection matrix is

$$
P = A(A^T A)^{-1}A^T,
$$

so that **$p = Pb$**.

`,
      },
      {
        title: 'Orthonormal Bases and the Gram-Schmidt Process',
        body: `### Orthonormal Bases
        
The vectors **$q_1, \\ldots, q_n$** are **orthogonal** when their dot products **$q_i \\cdot q_j$** are zero. More exactly $q_i^{T}q_j=0$ whenever $i$ is not equal to $j$. Divide each vector by its length and the vectors become **orthogonal unit vectors**. Their lengths are all $1$ (normal). Then the basis is called **orthonormal**.

***DEFINITION***

The vectors $q_1, \\ldots, q_n$ are orthonormal if

$$
q_i^{T} q_j = \\begin{cases} 
0 & \\text{when } i \\neq j \\quad (\\textit{orthogonal} \\text{ vectors}) \\newline
1 & \\text{when } i = j \\quad (\\textit{unit} \\text{ vectors: } \\|\\boldsymbol{q}_i\\| = 1) 
\\end{cases}
$$
A matrix with orthonormal columns is assigned with the special letter $Q$.


**The matrix $Q$ is easy to work with because $Q^TQ=I$**. This repeats in matrix langauge that the columns $q_1, \\ldots, q_n$ are orthonormal. $Q$ is not required to be square.

**A matrix $Q$ with orthonormal columns satisfies $Q^TQ=I$**

$$
Q^{T}Q = 
\\begin{bmatrix} 
- \\boldsymbol{q}_1^{T} - \\newline
- \\boldsymbol{q}_2^{T} - \\newline
- \\boldsymbol{q}_n^{T} - 
\\end{bmatrix}
\\begin{bmatrix} 
\\mid & \\mid & \\mid \\newline
\\boldsymbol{q}_1 & \\boldsymbol{q}_2 & \\boldsymbol{q}_n \\newline
\\mid & \\mid & \\mid 
\\end{bmatrix}
= 
\\begin{bmatrix} 
1 & 0 & \\cdots & 0 \\newline 
0 & 1 & \\cdots & 0 \\newline 
\\vdots & \\vdots & \\ddots & \\vdots \\newline
0 & 0 & \\cdots & 1 
\\end{bmatrix}
= I.
$$

When row $i$ of $Q^T$ multiplies column $j$ of $Q$, the dot product is **$q_i^Tq_j$**. Off the diagonal $(i \\neq j)$ that dot product is zero by orthogonality. On the diagonal $(i=j)$ the unit vectors give **$q_i^Tq_i=\\|q_i\\|^2 = 1$**. Often $Q$ is rectangular $(m > n)$. Sometimes $m=n$.

**When $Q$ is square, $Q^TQ=I$ means that $Q^T=Q^{-1}$: transpose = inverse.**

If the columns are only orthogonal (not unit vectors), dot product still give a diagonal matrix (not the identity matrix). This diagonal matrix is almost as good as $I$. The important thing is orthogonality, then it is easy to produce unit vectors.

To Repeat: $Q^TQ=I$ even when $Q$ is rectangular. In that case $Q^T$ is only an inverse from the left. For square matrices we also have $QQ^T=I$, so $Q^T$ is the two-sided inverse of $Q$. The rows of a square $Q$ are orthonormal like the columns. **The inverse is the transpose**. In this square case we call $Q$ an **orthogonal matrix**.

        
        
        `,
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
