/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: 4 sprite player test
@author: 
@tags: []
@addedOn: 2024-00-00
*/

const player = "u"
const player2 = "i"
const player3 = "o"
const player4 = "p"
const wall = "w"
setLegend(
  [ player, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333
3333333333333333` ],
  [ player2, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777` ],
  [ player3, bitmap`
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666
6666666666666666` ],
  [ player4, bitmap`
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444
4444444444444444` ],
  [ wall, bitmap`
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111
1111111111111111` ],
)

setSolids([player, player2, player3, player4, wall])

let level = 0
const levels = [
  map`
.....................
.....................
..........w..........
...........w.........
.....................
.....................
...............w.....
...............w.....
.....................
.ui.........w........
.op....ww..w.........
.....................
.....................`
]

setMap(levels[level])


onInput("w", () => {
  getFirst(player).y -= 1
  getFirst(player2).y -= 1
  getFirst(player3).y -= 1
  getFirst(player4).y -= 1
})
onInput("a", () => {
  getFirst(player).x -= 1
  getFirst(player2).x -= 1
  getFirst(player3).x -= 1
  getFirst(player4).x -= 1
})
onInput("s", () => {
  getFirst(player3).y += 1
  getFirst(player4).y += 1
  getFirst(player).y += 1
  getFirst(player2).y += 1
})
onInput("d", () => {
  getFirst(player2).x += 1
  getFirst(player).x += 1
  getFirst(player4).x += 1
  getFirst(player3).x += 1
})



afterInput(() => {
  if (getFirst(player).x !== getFirst(player3).x) {
 getFirst(player).x = getFirst(player3).x
 getFirst(player3).x = getFirst(player).x 
 getFirst(player2).x = getFirst(player4).x
 getFirst(player).x = getFirst(player2).x - 1
}
if (getFirst(player2).x !== getFirst(player4).x) {
 getFirst(player4).x = getFirst(player2).x
 getFirst(player3).x = getFirst(player4).x - 1
 getFirst(player).x = getFirst(player4).x
}
if (getFirst(player).y !== getFirst(player2).y) {
 getFirst(player2).y = getFirst(player4).y - 1
 getFirst(player3).y = getFirst(player4).y
 getFirst(player).y = getFirst(player2).y
}
if (getFirst(player4).y !== getFirst(player3).y) {
 getFirst(player4).y = getFirst(player2).y + 1
 getFirst(player3).y = getFirst(player4).y
 getFirst(player).y = getFirst(player2).y
}
if (getFirst(player2).y !== getFirst(player).y) {
 getFirst(player2).y = getFirst(player3).y - 1
 getFirst(player4).y = getFirst(player3).y
 getFirst(player2).y = getFirst(player).y
}
if (getFirst(player3).y !== getFirst(player4).y) {
 getFirst(player4).y = getFirst(player2).y + 1
 getFirst(player3).y = getFirst(player4).y
 getFirst(player).y = getFirst(player2).y
}
})
