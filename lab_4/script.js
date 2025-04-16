function Run() 
{
    var data = theJSON.data;

    var topLeftPoint = findTopLeft(data);
    var topRightPoint = findTopRight(data);
    var bottomLeftPoint = findBottomLeft(data);
    var bottomRightPoint = findBottomRight(data);

    var boundingBox = 
    {
        topLeft: topLeftPoint,
        topRight: topRightPoint,
        bottomLeft: bottomLeftPoint,
        bottomRight: bottomRightPoint
    };

    console.log("Bounding box computed for llong.07@tamu.edu: ");
    console.log(boundingBox);
}

function findTopLeft(points) 
{
    var topLeft = null;
    points.forEach(point => {
        if (topLeft === null || (point.lat > topLeft.lat || (point.lat === topLeft.lat && point.lon < topLeft.lon))) {
            topLeft = point;
        }
    });
    return topLeft;
}

function findBottomLeft(points) 
{
    var bottomLeft = null;
    points.forEach(point => {
        if (bottomLeft === null || (point.lat < bottomLeft.lat || (point.lat === bottomLeft.lat && point.lon < bottomLeft.lon))) {
            bottomLeft = point;
        }
    });
    return bottomLeft;
}

function findTopRight(points) 
{
    var topRight = null;
    points.forEach(point => {
        if (topRight === null || (point.lat > topRight.lat || (point.lat === topRight.lat && point.lon > topRight.lon))) {
            topRight = point;
        }
    });
    return topRight;
}

function findBottomRight(points) 
{
    var bottomRight = null;
    points.forEach(point => {
        if (bottomRight === null || (point.lat < bottomRight.lat || (point.lat === bottomRight.lat && point.lon > bottomRight.lon))) {
            bottomRight = point;
        }
    });
    return bottomRight;
}
