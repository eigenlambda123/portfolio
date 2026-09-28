export const mathematicsAndMachineLearningRelationship = {
    slug: 'mathematics-and-machine-learning-relationship',
    meta: 'Mathematics and Machine Learning',
    title: 'Mathematics and ML Relationship',
    summary: 'A collection of notes on the relationship between mathematics, specifically linear algebra, calculus, and probability with machine learning.',
    content: [
      {
        title: 'Least Squares and Linear Regression',
        body: `Recall that to train a Linear Regression model, we must find the parameter vector $\\theta$ that minimizes the Root Mean Squared Error (RMSE). One way to achieve this is through a closed-form analytical solution known as the **Normal Equation**:

$$
\\hat{\\theta}=(X^TX)^{-1}X^Ty
$$

This formulation is directly derived from linear algebra, specifically the concept of **Orthogonal projection**. The projection matrix $P$ used to project a vector $b$ onto the column space of a matrix $A$ is:

$$
P=A(A^TA)^{-1}A^T
$$

To find the projected values (the predicted points), we multiply the projection matrix by $b$, giving $\\hat{p} = Pb = A(A^TA)^{-1}A^Tb$. Here, the component $(A^TA)^{-1}A^Tb$ is exactly the **Normal Equation**. In other words, **solving for the best-fit line is mathematically identical to projecting a vector onto a subspace**.

Consider a scenario where we want to fit a line $y = C + Dt$ to three data points: $(1, 1)$, $(2, 2)$, and $(3, 2)$. This gives us the following system of equations:

$$
\\begin{align*}
C + 1D &= 1 \\\\
C + 2D &= 2 \\\\
C + 3D &= 2
\\end{align*}
$$

Transforming this into the matrix equation $Ax = b$:

$$
\\begin{bmatrix} 1 & 1 \\\\ 1 & 2 \\\\ 1 & 3 \\end{bmatrix} \\begin{bmatrix} C \\\\ D \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix}
$$

Because these points do not fall on a perfectly straight line, this system has no exact solution. To find the best possible line, we must minimize the squared length of the error vector $e$:

$$
\\text{Minimize: } \\vert{}\\vert{}Ax - b\\vert{}\\vert{}^2 = \\vert{}\\vert{}e\\vert{}\\vert{}^2 = e_1^2 + e_2^2 + e_3^2
$$

**Applying the Normal Equation**

To find the optimal coefficients $\\hat{x} = \\begin{bmatrix} \\hat{C} \\\\ \\hat{D} \\end{bmatrix}$, we multiply both sides by $A^T$, resulting in the normal equation $A^TA\\hat{x} = A^Tb$:
$$A^TA = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 1 & 2 \\\\ 1 & 3 \\end{bmatrix} = \\begin{bmatrix} 3 & 6 \\\\ 6 & 14 \\end{bmatrix}$$
$$A^Tb = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & 2 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 2 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 11 \\end{bmatrix}$$
This leaves us with a new, solvable system of equations:

$$
\\begin{align*}
3C + 6D &= 5 \\\\
6C + 14D &= 11
\\end{align*}
$$

Solving this system gives us the coefficients for the line of best fit:

$$
\\hat{D} = \\frac{1}{2}, \\quad \\hat{C} = \\frac{2}{3}
$$

**Predictions and Errors**

Applying these coefficients to our original formula gives us our best-fit line: $y = \\frac{2}{3} + \\frac{1}{2}t$. We can use this to calculate our projected points ($\\hat{p} = A\\hat{x}$) and their respective residual errors ($e = b - \\hat{p}$):
- **Point 1 ($t=1$):** $p_1 = \\frac{7}{6}$ $\\rightarrow$ $e_1 = 1 - \\frac{7}{6} = -\\frac{1}{6}$
- **Point 2 ($t=2$):** $p_2 = \\frac{5}{3}$ $\\rightarrow$ $e_2 = 2 - \\frac{5}{3} = \\frac{1}{3}$
- **Point 3 ($t=3$):** $p_3 = \\frac{13}{6}$ $\\rightarrow$ $e_3 = 2 - \\frac{13}{6} = -\\frac{1}{6}$

(Note: The sum of the errors $-\\frac{1}{6} + \\frac{1}{3} - \\frac{1}{6} = 0$, confirming our line is perfectly centered through the data's variance).

***GEOMETRIC INTERPRETATION***

To understand why this works, we have to look at the problem purely as spatial geometry rather than algebraic equations.
- The columns of matrix $A$ define a flat 2D plane (the column space) embedded in a 3D space ($\\mathbb{R}^3$), because there are three observations.
- The target vector $b = [1, 2, 2]^T$ exists in this 3D space, but it does not lie flat on the 2D plane created by $A$. This spatial disconnect is why $Ax = b$ has no exact solution, the target is physically off the plane.
- To get as close to $b$ as possible using only the plane $A$, we drop a perpendicular line straight down from $b$ onto the plane. The point where it hits the plane is our projected vector $\\hat{p}$.
- The distance of that drop is our error vector $e$. Because the shortest distance from a point to a plane is a straight line down, the error vector $e$ is **strictly orthogonal (perpendicular)** to the entire column space of $A$.
- The variables $\\hat{C}$ and $\\hat{D}$ are simply the "coordinates" or "directions" that tell us how to move along the two column vectors of $A$ to arrive exactly at the projected point $\\hat{p}$.
  
`
      }
    ],

};
