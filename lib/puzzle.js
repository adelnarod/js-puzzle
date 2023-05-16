// todo
// 1. Select all my tiles
const tiles = document.querySelectorAll("td");
console.log(tiles);
// 2. Listen for the click event

// 3. Check if there is an empty spot near the clicked tile
const canMove = (tile) => {
  // 3.1 Get the position of the empty tile
  const emptyTile = document.querySelector('.empty')
  const emptyTileRow = emptyTile.parentElement.rowIndex
  const emptyTileColumn = emptyTile.cellIndex
  const tileColumn = tile.cellIndex
  const tileRow = tile.parentElement.rowIndex

  return (tileRow === emptyTileRow && tileColumn === emptyTileColumn + 1) ||
         (tileRow === emptyTileRow && tileColumn === emptyTileColumn - 1) ||
         (tileColumn === emptyTileColumn && tileRow === emptyTileRow + 1) ||
         (tileColumn === emptyTileColumn && tileRow === emptyTileRow - 1)
}

const moveTile = (element) => {
  // 1. Select empty tile
  const emptyTile = document.querySelector('.empty')
  // 2. Swap the contents
  // 2.1 Move the element's content to the empty tile
  emptyTile.innerHTML = element.innerHTML
  // 2.2 Remove the empty class
  emptyTile.classList.remove('empty')
  // 2.3 Add empty class to the element
  element.classList.add('empty')
  // 2.4 Remove the element's content
  element.innerHTML = ''
}

tiles.forEach((tile) => {
  tile.addEventListener('click', (event) => {
    // console.log(tile)
    // console.log(emptyTile.parentElement.rowIndex)
    if (canMove(event.currentTarget)) {
      moveTile(tile)
    }
  })
})

// 4. Swap the tile and the empty space
