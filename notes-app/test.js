function polarAngle(p0, p1) {
  const deltaY = p1[1] - p0[1];
  const deltaX = p1[0] - p0[0];
  return Math.atan2(deltaY, deltaX);
}

function distSquared(p0, p1) {
  const deltaX = p1[0] - p0[0];
  const deltaY = p1[1] - p0[1];
  return deltaX * deltaX + deltaY * deltaY;
}

function ccw(p0, p1, p2) {
  const dx1 = p1[0] - p0[0];
  const dy1 = p1[1] - p0[1];
  const dx2 = p2[0] - p0[0];
  const dy2 = p2[1] - p0[1];
  return dx1 * dy2 - dx2 * dy1;
}

function grahamScan(points) {
  // 找到最下面的点
  let minY = Infinity;
  let minPoint;
  for (const point of points) {
    if (point[1] < minY) {
      minY = point[1];
      minPoint = point;
    }
  }

  // 根据极角排序点
  const sortedPoints = [...points];
  sortedPoints.sort((p1, p2) => {
    const angle1 = polarAngle(minPoint, p1);
    const angle2 = polarAngle(minPoint, p2);
    if (angle1 < angle2) return -1;
    if (angle1 > angle2) return 1;
    if (distSquared(minPoint, p1) < distSquared(minPoint, p2)) return -1;
    return 1;
  });
  return sortedPoints
}

// 用法示例
const points = [
  [120.28440731738281, 30.22351825933838], // P1
  [120.29788273547364, 30.192705042175294], // P2
  [120.30929821704102, 30.21450603704834], // P3
  [120.28234738085938, 30.203433878234865], // P4
  [120.30123013232422, 30.22506321173096] // P5
];
const sortedPoints = grahamScan(points);
console.log(sortedPoints);
// 结果
// [
//   [ 120.29788273547364, 30.192705042175294 ], // P2
//   [ 120.30929821704102, 30.21450603704834 ], // P3
//   [ 120.30123013232422, 30.22506321173096 ], // P5
//   [ 120.28440731738281, 30.22351825933838 ], // P1
//   [ 120.28234738085938, 30.203433878234865 ] // P4
// ]
