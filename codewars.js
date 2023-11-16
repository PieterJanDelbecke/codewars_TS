const bulkFunction = (residentId, items) => {
	return items.map((item) => {
		return { residentId, item };
	});
};

const residentId = "abc-abc";
const religions = ["hindu", "muslim"];

console.log(bulkFunction(residentId, religions));
