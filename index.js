class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return 2 * Math.PI * this.radius
  }

  get area() {
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(newDiameter) {
    this.radius = newDiameter/2
  }

  set circumference(newCircumference) {
    this.radius = (.5 * newCircumference) / Math.PI
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea/Math.PI)
  }

}