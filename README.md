## 📦 Getting Started

1. Clone the repo
```bash
git clone https://github.com/FilanMaulaAndini/promotional-task-ui
cd promotional-task-ui


2. Install dependencies
```bash
npm install
# or
yarn

3. Start development server
```bash
npm run dev
# or
yarn dev

Visit: http://localhost:5173

Reasoning behind the implementation:
```bash
* Use requestAnimationFrame makes the counter update in sync with the screen, so the movement looks smooth, not jumpy.
* It uses a built-in timestamp to track exact time passed. This helps keep the counter accurate, even on slow devices.
* The function of Math.min() is to make sure the progress value never goes above 1 (which represents 100%). It ensures it doesn’t go beyond the final target number.
* It uses `Math.floor` to round down the current count to a whole number. This is because counting up in whole numbers (like 1, 2, 3...), not decimals.
* Use cancelAnimationFrame in the cleanup function to stop the animation if it gets interrupted.
* Make the function easy to reuse so we can change the target number or duration anytime, and it will still work.
