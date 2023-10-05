function bmiCalculator(Weight , Height){
    var bmi = Math.floor(Weight/ (Height*Height));
    if (bmi <18.5) {
        return "Your bmi is " +bmi+ "so, you are undernourised";
    }
    else if(bmi >=18.5 && bmi<=24.9){
        return "your bmi is "+ bmi + "so, you are fit and in Good health kepp it up";
    }
    else if (bmi> 24.9){
        return "Your bmi is "+ bmi + "so, You are overweight and need to run up";
    }
}
bmiCalculator(56, 1.65)