var drawCellsAll = [];
var drawCells = [];

function InitializeDrawCells()
{
    drawCellsAll = [];
    drawCells = [];

    let drawGrid = document.getElementsByClassName("draw-grid")[0];
    let dCells = drawGrid.children;

    for (let dCell of dCells)
    {
        let dColors = [];

        for (let child of dCell.children)
        {
            dColors.push(getComputedStyle(child).backgroundColor.toString());
        }

        drawCellsAll.push(Object.create(new DrawCell(dColors)));
    }

    for (let cell of drawCellsAll)
    {
        if (drawCells.length > 0)
        {
            let matchFound = false;
            for (let drawCell of drawCells)
            {
                if (cell.colors.toString() == drawCell.colors.toString()) matchFound = true;
            }

            if (matchFound == false) drawCells.push(cell);
        }
        else
        {
            drawCells.push(cell);
        }
    }

    console.log(drawCells.length);
}

class DrawCell
{
    constructor(colors)
    {
        this.colors = colors;
    }
}