const columns = [
    ["name", { value: "Name", type: "text" }],
    ["status", { value: "Status", type: "text" }],
    ["priority", { value: "Priority", type: "text" }],
    ["email", { value: "Email", type: "text" }],
    ["phone", { value: "Phone", type: "text" }],
    ["source", { value: "Source", type: "text" }],
    ["from", { value: "From", type: "text" }],
];

columns.map((item, idx) => {
    console.log(item[0])
})