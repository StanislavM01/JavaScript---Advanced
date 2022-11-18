function classHierarchy() {

    class Figure {
        constructor(m, cm, mm) {
            this.m = m
            this.cm = cm
            this.mm = mm
        }
        get area() {

        }
        set changeUnits(m, cm, mm) {
            this.m = m
            this.cm = cm
            this.mm = mm
        }
        toString() {
            return `Figures units: ${this.m, this.cm, this.mm}`
        }
    }

    class Cirlce extends Figure {
        constructor(m, cm, mm, radius) {
            super(m, cm, mm)
            this.radius = radius
        }
        
    }


}