let x = 5, 
    y = 6,
    z = 7,
    HalfOfPerimeter = (x + y + z)/2,
    areaOfTriangle = Math.sqrt(HalfOfPerimeter * ((HalfOfPerimeter - x) * (HalfOfPerimeter - y) * (HalfOfPerimeter - z)));

    console.log(areaOfTriangle);