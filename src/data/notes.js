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

**The row space and column space have the same dimension $r$ ($r$ = rank of the matrix). 
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
\\vdots\\\\
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

$N(A)$ is the orthogonal complement of $C(A^{T})$ in $R^{n}$, and $N(A^{T})$ is the orthogonal complement of $C(A)$ in $R^{m}$. This is also part of the *fundamental theorems* of linear algebra.

`,
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


**The matrix $Q$ is easy to work with because $Q^TQ=I$**. This repeats in matrix language that the columns $q_1, \\ldots, q_n$ are orthonormal. $Q$ is not required to be square.

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

### Gram-Schmidt Process

Start with three independent vectors **$a, b, c$**. We intend to construct three orthogonal vectors **$A, B, C$**. The we divide **$A, B, C$** by their lengths. That produces three orthonormal vectors **$q_1=A/\\|A\\|, q_2=B/\\|B\\|, q_3=C/\\|C\\|$**.

**Gram-Schmidt** Begin by choosing $A=a$. This first direction is accepted as it comes. The next direction $B$ must be perpendicular to $A$. **Start with $b$ and subtract its projection along $A$**. This leaves the perpendicular part, which is the orthogonal vector $B$:

$$
\\text{First Gram-Schmidt step } \\quad B=b-\\frac{A^Tb}{A^TA}A.
$$

**$A$ and $B$ are now orthogonal**. Multiply the equation above by $A^T$ to verify that $A^TB=A^Tb-A^Tb=0$. **This vector $B$ is what we have called the error vector $e$**, perpendicular to $A$. Notice that $B$ in the equation above is not zero (otherwise $a$ and $b$ would be dependent). The direction **$A$** and **$B$** are now set.

The third direction starts with **$c$**. This is not a combination of $A$ and $B$ (because $c$ is not a combination of $a$ and $b$). But most likely $c$ is not perpendicular to $A$ and $B$. **So subtract off its components in those two directions to get a perpendicular direction $C$**:

$$
\\text{Next Gram-Schmidt step } \\quad C=c-\\frac{A^Tc}{A^TA}A-\\frac{B^Tc}{B^TB}B.
$$

This is the one and only idea of Gram-Schmidt process. **Subtract from every new vector its projections in the directions already set.** That idea is repeated at every step. If we had a fourth vector $d$, we would subtract three projections onto $A, B, C$ to get $D$.

![Figure 4.11: First Gram-Schmidt step, projecting $b$ onto the line through $a$ and finding the orthogonal component $B = b-p$](/notes/gram-schmidt-projection.png)

At the end, or immediately when each one is found, divide the orthogonal vectors $A, B, C$ by their lengths. **The resulting vectors $q_1, q_2, q_3$ are orthonormal.**

`,
      },
     {
        title: 'Cramer\'s Rule',
        body: `**Cramer's Rule solves $Ax=b$**. A neat idea gives the first component $x_1$. Replacing the first column of $I$ by $x$ gives a matrix with determinant $x_1$. When you multiply it by $A$, the first column becomes $Ax$ which is $b$. The other columns of $B_1$ are copied from $A$:

$$
\\text{Key idea } \\quad \\begin{bmatrix} & & \\\\ & A & \\\\ & & \\end{bmatrix} \\begin{bmatrix} \\boldsymbol{x_1} & 0 & 0 \\\\ \\boldsymbol{x_2} & 1 & 0 \\\\ \\boldsymbol{x_3} & 0 & 1 \\end{bmatrix} = \\begin{bmatrix} \\boldsymbol{b_1} & a_{12} & a_{13} \\\\ \\boldsymbol{b_2} & a_{22} & a_{23} \\\\ \\boldsymbol{b_3} & a_{32} & a_{33} \\end{bmatrix} = B_1.
$$

We multiplied a column at a time. **Take determinants of the three matrices to find $x_1$**

$$
\\text{Product rule } \\quad (\\det(a))(x_1)=\\det(B_1) \\quad \\implies \\quad x_1=\\frac{\\det(B_1)}{\\det(A)}.
$$

This is the first component of Cramer's Rule! Changing a column of $A$ gave $B_1$.
To find $x_2$ and $B_2$, put the vectors $x$ and $b$ into the second columns of $I$ and $A$:

$$
\\text{Same idea } \\quad \\begin{bmatrix} & & \\\\ & A & \\\\ & & \\end{bmatrix} \\begin{bmatrix} 1 & \\boldsymbol{x_1} & 0 \\\\ 0 & \\boldsymbol{x_2} & 0 \\\\ 0 & \\boldsymbol{x_3} & 1\\end{bmatrix} = \\begin{bmatrix} a_{11} & \\boldsymbol{b_1} & a_{13} \\\\ a_{21} & \\boldsymbol{b_2} & a_{23} \\\\ a_{31} & \\boldsymbol{b_3} & a_{33} \\end{bmatrix} = B_2.
$$

Take determinants to find $(\\det(A))(x_2)=\\det(B_2)$. This gives $x_2=(\\det(B_2))/(\\det(A))$.

***CRAMER's RULE***

**If $\\det(A)$ is not zero, $Ax=b$ is solved by determinants:**

$$
x_1=\\frac{\\det(B_1)}{\\det(A)}, \\quad x_2=\\frac{\\det(B_2)}{\\det(A)}, \\quad \\ldots, \\quad x_n=\\frac{\\det(B_n)}{\\det(A)}.
$$

**The matrix $B_j$ has the $j$th column of $A$ replaced by the vector $b$.**

This is Cramer's Rule. It is a neat idea, but it is not used in practice because it is slow and numerically unstable.

To solve an $n$ by $n$ system, Cramer's Rule requires $n+1$ determinants (of $A$ and the $n$ different $B$'s). When each one is the sum of $n!$ terms applying the "big formula" with all permutations, makes a total of $(n+1)!$ terms. **It would be crazy to solve equations that way**. But it is a neat idea that shows the connection between determinants and solutions of linear systems.
`,
     },
     {
        title: 'Eigenvalues and Eigenvectors',
        body: `When a linear transformation is applied to space, most vectors are knocked off their original line (span) and change direction. However, there are special vectors that stay on their original span during a transformation called **eigenvectors**. Their direction does not change, they are only scaled. The scaling factor by which an eigenvector stretches, squishes, or reverses during the transformation is called the **eigenvalue**.

**The basic equation is $Ax=\\lambda x$. The number $\\lambda$ is an eigenvalue of $A$.**

The expression $Ax= \\lambda x$ states that matrix multiplication $(Ax)$ has the exact same effect on vector $x$ as a simple scaling $(\\lambda x)$. To solve this geometrically, we rewrite the equation as **$(A-\\lambda I)x=0$**. For a non-zero vector $x$ to land on zero, the modified transformation $(A-\\lambda I)$ must completely flatten/squish space into a lower dimension.
Geometrically, this means that the transformation $(A-\\lambda I)$ is **not invertible**. Algebraically, this means that the determinant of $(A-\\lambda I)$ must be zero:

$$
\\det(A-\\lambda I)=0
$$

If $(A-\\lambda I)x=0$ has a  nonzero solution, $A-\\lambda I$ is not invertible. **The determinant of $A-\\lambda I$ must be zero.** This is how to recognize an eigenvalue $\\lambda$:

$$
\\textbf{Eigenvalues } \\quad \\text{The number } \\lambda \\text{ is an eigenvalue of } A \\text{ if and only if } A-\\lambda I \\text{ is singular.}
$$

$$
\\textbf{Equation for the eigenvalues } \\quad \\det(A-\\lambda I) = 0.
$$

This "characteristic polynomial" $\\det(A-\\lambda I)$ involves only $\\lambda$, not $x$. When $A$ is $n$ by $n$, equation $\\det(A-\\lambda I)=0$ is a polynomial of degree $n$ in $\\lambda$. Then $A$ has $n$ eigenvalues (counting multiplicities). Each $\\lambda$ leads to $x$:

**For each eigenvalue $\\lambda$ solve $(A-\\lambda I)x=0$ or $Ax=\\lambda x$ to find an eigenvector $x$.**

To solve the eigenvalue problem for an $n$ by $n$ matrix, follow these steps:

1. **Compute the determinant of $A-\\lambda I$.** With $\\lambda$ subtracted along the diagonal, this determinant starts with $\\lambda^n$ or $-\\lambda^n$. It is a polynomial in $\\lambda$ of degree $n$.
2. **Find the roots of this polynomial,** by solving $\\det(A-\\lambda I)=0$. The $n$ roots are the $n$ eigenvalues of $A$. They make $A-\\lambda I$ singular.
3. For each eigenvalue $\\lambda$, **solve $(A-\\lambda I)x=0$** to find the corresponding eigenvector $x$.

***FACTS***

**Eigenvectors are not unique**: if $x$ is an eigenvector, then any nonzero scalar multiple $cx$ is also an eigenvector, because $A(cx)=c(Ax)=c(\\lambda x)=\\lambda (cx)$. This means eigenvectors are usually understood up to a scale factor.

**Eigenvalues can be negative, zero, or complex** depending on the matrix. A negative eigenvalue flips direction, zero means the transformation collapses that direction, and complex eigenvalues appear in rotations and oscillations.

***EIGENBASIS***

If a transformation has enough eigenvectors to span the entire space, we can use those eigenvectors as our new coordinate system **(an eigenbasis)**. In this eigenbasis, the transformation is represented by a diagonal matrix with the eigenvalues on the diagonal. Geometrically, a diagonal matrix means that the transformation is just pure stretching of space along the coordinate axes, with no rotating or shearing.

**An eigenbasis is simply a coordinate system (a basis) made entirely of eigenvectors.** To choose the eigenbasis, find the **eigenvalues $(\\lambda)$** and **eigenvectors $(x)$**. If an $n \\times n$ matrix has $n$ linearly independent eigenvectors, collect those vectors to form a new coordinate axes or the **eigenbasis**.

Changing our basis means looking at the exact same linear transformation, but from a different perspective **(a different coordinate system)**. If we use the eigenvectors as our new axes, the transformation becomes incredibly simple. Instead of shifting, rotating, and shearing, the transformation from this perspective is pure, independent stretching along each axis.

**Algebraic Formula** $(A=PDP^{-1})$

To see a transformation $(A)$ through the lens of its eigenbasis, we use a **change of basis matrix $(P)$:**
- **$P$(Change of basis matrix):** A matrix whose columns are the eigenvectors. It translates vectors from our "eigenbasis coordinates" into "standard coordinates".
- **$P^{-1}$:** Translates standard coordinates back into eigenbasis coordinates.

To describe the transformation in the easiest way possible, we perform a three-step sandwich maneuver:
1. **$$P^{-1}$$:** Take a standard vector and translate it into the eigenbasis perspective.
2. **$A$:** Apply the transformation in standard coordinates.
3. **$$P$$:** Translate the result back into standard coordinates.

This gives use a **Diagonal Matrix $(D)$:**

$$
D = P^{-1}AP \\quad \\text{ or } \\quad A = PDP^{-1}
$$

Geometrically, $D$ is a matrix where all non-diagonal entries are zero, and the diagonal entries are just the eigenvalues. It represents a space that is purely being scaled along its axes, making complex calculations (like raising a matrix to a high power, $A^{100}=PD^{100}P^{-1}$) incredibly fast to compute.
`,
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
