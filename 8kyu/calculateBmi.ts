// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

export function bmi(weight: number, height: number): string {
  let res = weight / (height**2)
  let x = ''
  if (res <= 18.5) {
    x = "Underweight"
  } else if (res <= 25.0) {
    x = "Normal"
  } else if (res <= 30.0) {
    x = "Overweight"
  } else if (res > 30) {
    x = "Obese"
  }
  return x
}