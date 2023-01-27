class Table {
    constructor(init) {
        this.init = init;
    }

    createHeader(data) {
        let open = "<thead><tr>";
        let close = "</tr></thead>";
        data.forEach((d) => {
        open += `<th>${d}</th>`;
    });

        return open + close;
    }

    createBody(data) {
        let open = "<tbody>";
        let close = "</tbody>";

    data.forEach((d) => {
        open += `
            <tr>
                <td>${d[0]}</td>
                <td>${d[1]}</td>
            </tr>
        `;
    });
    
    return open + close;
    }

    render(element) {
    let table =
        "<table class='table table-hover'>" +
        this.createHeader(this.init.columns) +
        this.createBody(this.init.data) +
        "</table>";
    element.innerHTML = table;
    }
    }

    const table = new Table({
    columns: ["Name", "No. HP"],
    data: [
        ["Rizqi Nur Rifa'i", "081399399290"],
        ["Ria Nur Azizah", "08978530011"],
        ["Dwi Nur F", "082259596293"],
        ["Diana Putri F", "089696269943"]
    ]
    });
    const app = document.getElementById("app");
    table.render(app);

    export default Table;
