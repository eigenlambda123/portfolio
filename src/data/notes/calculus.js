export const calculus = {
    slug: 'calculus',
    meta: 'Mathematics',
    title: 'Calculus',
    summary: 'A collection of calculus concepts that I find particularly interesting or useful.',
    content: [
      {
        title: 'Higher Order Derivatives',
        body: `Higher order derivatives are the derivatives of a function taken multiple times. The first derivative represents the rate of change of the function, while the second derivative represents the rate of change of the first derivative, and so on.

Start with the function $f(x)=5x^{3}-3x^{2}+10x-5$, then the first derivative is $f'(x)=15x^{2}-6x+10$, the second derivative is $f''(x)=30x-6$, and the third derivative is $f'''(x)=30$. The fourth derivative is $f^{(4)}(x)=0$ and all higher order derivatives are also zero.

**Fact:**

If $p(x)$ is a polynomial of degree $n$, then

$$
p^{(k)}(x)=0 \\quad \\text{for all } k>n
$$

***INTERPRETATION***

If the **position** of an object is given by $s(t)$ we know that the **velocity** is the first derivative of the position.

$$
v(t)=s'(t)
$$

The **acceleration** of the object is the first derivative of the **velocity**, but since this is the first derivative of the position function we can also think of the acceleration as the second derivative of the position function.

$$
a(t)=v'(t)=s''(t)
$$

The **jerk** of the object is the first derivative of the **acceleration**, but since this is the first derivative of the velocity function we can also think of the jerk as the third derivative of the position function.

$$
j(t)=a'(t)=v''(t)=s'''(t)
$$

***NOTATION***

An alternate notation for higher order derivatives is

$$
f'(x) = \\frac{df}{dx}, \\quad f''(x) = \\frac{d^2f}{dx^2}, \\quad f'''(x) = \\frac{d^3f}{dx^3}, \\quad f^{(n)}(x) = \\frac{d^nf}{dx^n}.
$$
`,
      },
      {
        title: 'Critical Points and Extrema',
        body: `### Critical Points
        
We say that $x=c$ is a critical point of the function $f(x)$ if $f(c)$ exists and if either of the following are true.

$$
f'(c)=0 \\quad \\text{or} \\quad f'(c) \\text{ does not exist}.
$$

### Extrema (Minimum and Maximum Values)

**Definition:**
1. We say that $f(x)$ has an **absolute (or global) maximum** at $x=c$ if $f(x)\\leq f(c)$ for every $x$ in the domain we are working on.
2. We say that $f(x)$ has a **relative (or local) maximum** at $x=c$ if $f(x)\\leq f(c)$ for every $x$ in some open interval around $x=c$.
3. We say that $f(x)$ has an **absolute (or global) minimum** at $x=c$ if $f(x) \\geq f(c)$ for every $x$ in the domain we are working on.
4. We say that $f(x)$ has a **relative (or local) minimum** at $x=c$ if $f(x)\\geq f(c)$ for every $x$ in some open interval around $x=c$.

![Graph illustrating absolute and relative extrema](/notes/extrema.png)

***EXTREME VALUE THEOREM***

**Suppose that $f(x)$ is continuous on the interval $[a,b]$. Then there are two numbers $c$ and $d$ in $[a,b]$ such that $f(c)$ is an absolute maximum of the function and $f(d)$ is an absolute minimum of the function.**

So, if we have a continuous function on an interval $[a,b]$, then we are guaranteed to have both an absolute maximum and an absolute minimum for the function somewhere in the interval. The theorem doesn't tell us where they will occur or whether they occur more than once, but at least it tells us that they do exist somewhere. Sometimes, all that we need to know is that they do exist.

***FERMAT'S THEOREM***

**If $f(x)$ has a relative extremum at $x=c$ and $f'(c)$ exists, then $x=c$ is a critical point of $f(x)$. In fact, it will be a critical point such that $f'(c)=0$.**

This theorem tells us that there is a nice relationship between relative extrema and critical points. In fact, it will allow us to get a list of all possible relative extrema. Since a relative extremum must be a critical point, the list of all critical points will give us a list of all possible relative extrema.

`,
      },
      {
        title: 'Linear Approximation and Newton\'s Method',
        body: ` ### Linear Approximation

Given a function $f(x)$, we can find its tangent line at $x=a$. The equation of the tangent line is,

$$
L(x) = f(a) + f'(a)(x-a)
$$

Take a look at the following graph of a function and its tangent line at $x=a$.

![Graph illustrating linear approximation](/notes/linear-approximation.png)

From this graph, we can see that near $x=a$, the tangent line and the function have nearly the same graph. On occasion, we will use the tangent line, $L(x)$, as an approximation to the function, $f(x)$, near $x=a$. In these cases, we call the tangent line the **linear approximation** to the function near $x=a$.

Linear approximations do a very good job of approximating values of $f(x)$ as long as we stay "near" $x=a$. However, the farther away from $x=a$ we get, the worse the approximation is liable to be. The main problem here is that how near we need to stay to $x=a$ in order to get a good approximation will depend on both the function we're using and the value of $x=a$ we're using.
        
### Newton's Method

Suppose that we want to approximate the solution to $f(x)=0$, and also suppose that we have somehow found an initial approximation to this solution, say, $x_{0}$. This initial approximation is probably not all that good; in fact, it may be nothing more than a quick guess we made, and so we'd like to find a better approximation.

First, we will get the tangent line to $f(x)$ at $x_{0}$. 

$$
y=f(x_{0})+f'(x_{0})(x-x_{0})
$$

Now, take a look at the graph below.

![Graph illustrating Newton's method](/notes/newton's-method.png)

The blue line is the tangent line at $x_{0}$. We can see that this line will cross the $x$-axis much closer to the actual solution to the equation than $x_{0}$ does. Let's call this point where the tangent at $x_{0}$ crosses the $x$-axis $x_{1}$ and we'll use this point as our new approximation to the solution.

How do we find this point? We know its coordinates, $(x_{1}, 0)$, and we know that it is on the tangent line, so we plug this point into the tangent line and solve for $x_{1}$ as follows:

$$
\\begin{align*}
0 &= f(x_0) + f'(x_0)(x_1 - x_0) \\newline
x_1 - x_0 &= -\\frac{f(x_0)}{f'(x_0)} \\newline
x_1 &= x_0 - \\frac{f(x_0)}{f'(x_0)}
\\end{align*}
$$

So, we can find the new approximation provided the derivative isn't zero at the original approximation.

Now we repeat the whole process to find an even better approximation. We form up the tangent line to $f(x)$ at $x_{1}$ and use its root, which we'll call $x_{2}$, as a new approximation to the actual solution. If we do this we will arrive at the following formula.

$$
x_{2}=x_{1}-\\frac{f(x_{1})}{f'(x_{1})}
$$

This point is also shown on the graph above and we can see from this graph that if we continue following this process, we'll get a sequence of numbers that are getting very close to the actual solution. **This process is called Newton's Method.**

***NEWTON'S METHOD***

**If $\\boldsymbol{x_{n}}$ is an approximation of a solution of $\\boldsymbol{f(x)=0}$ and if $\\boldsymbol{f'(x_{n})\\neq 0}$ the next approximation is given by,** 

$$
\\boldsymbol{x_{n+1}=x_{n}-\\frac{f(x_{n})}{f'(x_{n})}}
$$

This should lead to the question of when do we stop? How many times do we go through this process? One of the more common stopping points in the process is to continue until two successive approximations agree to a given number of decimal places.

In order for Newton's Method to be applied, we must address two issues. First, we can only use this method if the form we are solving is $f(x)=0$. Second, we need to somehow get the initial approximation to the solution (i.e., we need $x_0$ somehow). One of the more common ways is to sketch the graph of the function and use that to get an estimate of the solution, which we then use as $x_0$. Another common method is that if we know there is a solution to a function in an interval, then we can use the midpoint of the interval as $x_0$.
`,
      }
    ],

};
