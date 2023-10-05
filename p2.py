import turtle

turtle.bgcolor("black")

circle = turtle.Turtle()
circle.speed(10)
circle.pencolor("green")
for i in range(400):
    circle.forward(i)
    circle.left(45)
