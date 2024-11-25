# Memory Card Game 🎮

A classic memory card matching game built with vanilla JavaScript, HTML, and CSS. Test your memory by matching pairs of cards while tracking your moves and time.

![Memory Game Preview](https://github.com/Saoud2021/Memory-card-Game/blob/main/assets/memorycarddgame.netlify.app_.png)

## 🎯 Features

- Interactive card flipping animations
- Move counter to track number of attempts
- Timer to measure gameplay duration
- Auto-shuffling cards for unique gameplay each time
- Restart functionality to reset the game
- Responsive design with a beautiful gradient background
- Matching pair detection with visual feedback

## 🚀 Live Demo

[Play the game here](https://[https://memorycarddgame.netlify.app]

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Custom SVG patterns for card backgrounds

## 🎮 How to Play

1. Click on any card to reveal its image
2. Click on another card to find its match
3. If cards match, they stay face up
4. If cards don't match, they flip face down
5. Continue until all pairs are matched
6. Try to complete the game in fewer moves and less time!

## 💻 Installation and Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/memory-card-game.git
```

2. Navigate to the project directory:
```bash
cd memory-card-game
```

3. Open `index.html` in your preferred browser to start playing!

## 🎨 Project Structure

```
memory-card-game/
│
├── index.html          # Game structure and card layout
├── style.css          # Game styling and animations
├── script.js          # Game logic and functionality
└── assets/           # Card images and icons
```

## 🔧 Technical Challenges & Solutions

During the development of this game, several key challenges were overcome:

1. **Card-Image Integration**
   - Challenge: Implementing the correct HTML structure to handle both card faces and images
   - Solution: Used absolute positioning and backface-visibility to create a clean flip effect

2. **Card Flipping Logic**
   - Challenge: Managing the state of flipped cards and preventing multiple card selections
   - Solution: Implemented a lock mechanism during card comparison and animation

3. **Card Shuffling**
   - Challenge: Creating a truly random card arrangement while maintaining pairs
   - Solution: Used CSS order property with Math.random() for efficient shuffling

4. **Game State Reset**
   - Challenge: Ensuring all game elements reset properly (timer, moves, card positions)
   - Solution: Created a comprehensive restart function that handles all state variables

## 🔍 Future Improvements

- Add difficulty levels with more cards
- Implement a high score system
- Add sound effects
- Create multiplayer mode
- Add mobile touch support

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/memory-card-game/issues).

## 📝 License

This project is [MIT](./LICENSE) licensed.

## 👏 Acknowledgments

- Card images sourced from [source-name]
- Pattern background generated using [pattern.monster](https://pattern.monster)
- Thanks to [mention any tutorials or resources that helped]
