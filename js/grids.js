var drawGridSize = 3;
var drawCellSize = 3;

var genGridSize = 3;
var genCellSize = 3;

function InitializeGrids()
{
    CreateGrid("draw-grid", drawGridSize, drawCellSize, true);

    CreateGrid("gen-grid", genGridSize, genCellSize, false);
}

function CreateGrid(mainGridClass, gridSize, cellSize, needAddListener)
{
    var grid = document.getElementsByClassName(mainGridClass)[0];
    grid.innerHTML = '';
    grid.setAttribute("style",  `grid-template-columns: repeat(${gridSize}, calc(100% / ${gridSize})); ` +
                                `grid-template-rows: repeat(${gridSize}, calc(100% / ${gridSize}));`);

    for (var i = 0; i < gridSize * gridSize; i++)
    {
        var gridCell = document.createElement("div");
        gridCell.className = "grid grid-cell";
        gridCell.setAttribute("style",  `grid-template-columns: repeat(${cellSize}, calc(100% / ${cellSize})); ` +
                                        `grid-template-rows: repeat(${cellSize}, calc(100% / ${cellSize}));`);

        for (var j = 0; j < cellSize * cellSize; j++) {
            var elementCell = document.createElement("div");
            elementCell.className = "grid-cell element-cell";
            if(needAddListener) elementCell.addEventListener('click', CellDraw);

            gridCell.appendChild(elementCell);
        }

        grid.appendChild(gridCell);
    }
}

function CellDraw()
{
    this.style = "background-color: " + document.getElementById("color-value").value + ";";
}

function ChangeSpin(mainGridName, gridSize, cellSize, needAddListener)
{
    gridSize = document.getElementById(`${mainGridName}-grid-spin`).value;
    cellSize = document.getElementById(`${mainGridName}-cell-spin`).value;

    CreateGrid(`${mainGridName}-grid`, gridSize, cellSize, needAddListener);
}

function DrawChangeSpin()
{
    ChangeSpin("draw", drawGridSize, drawCellSize, true);
}

function GenChangeSpin()
{
    ChangeSpin("gen", drawGridSize, drawCellSize, false);
}