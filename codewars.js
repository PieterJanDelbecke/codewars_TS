const activityIds = [];
for (let i = 0; i < 40; i++) {
	activityIds.push(i);
}

const residentActivityId = activityIds[Math.floor(Math.random() * 40)];

console.log("activityIds: ", activityIds);
console.log("residentActivityId: ", residentActivityId);
