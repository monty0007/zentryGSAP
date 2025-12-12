# Zentry Clone - Advanced GSAP Video Hero

A high-performance, visually stunning landing page clone inspired by Zentry, featuring advanced GSAP animations and a seamless double-buffered video player.

## 🚀 Features

-   **Seamless Video Transitions**: Custom "Double Buffer" video player implementation that preloads upcoming videos for zero-lag, cinema-quality transitions.
-   **GSAP Animations**: Complex timelines using `gsap` and `ScrollTrigger` for interactive, scroll-based effects.
-   **Responsive Design**: Fully responsive layout that adapts gracefully from mobile phones to large desktops.
-   **Performance Optimized**:
    -   `playsInline` support for mobile autoplay.
    -   Heavy state updates deferred to animation `onComplete` to prevent UI stutter.
    -   Dynamic z-index swapping for distinct video layering.
-   **Robust Loading**: Includes safety timeouts to prevent loading hangs on slow networks.

## 🛠️ Tech Stack

-   **React**: Core framework.
-   **GSAP (GreenSock)**: Advanced animation library.
-   **Tailwind CSS**: Utility-first styling.
-   **Vite**: Fast build tool.

## 🧠 Key Optimizations

### 1. Double Buffer Video Player
To eliminate the "black flash" or "reload lag" common in web video players, this project uses a modulo-based slot system. Two video elements (`Slot A` and `Slot B`) alternate roles. While one plays, the other silently preloads the next source. Transitions are handled by simply animating the "Active" slot over the "Background" slot.

### 2. Mobile-First Fixes
-   Fixed layout overflow issues (`ms-32` margins).
-   Implemented strict `playsInline` for iOS compatibility.
-   Added 5s safety timeout for the loading screen.

## 📦 Getting Started

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build**
    ```bash
    npm run build
    ```
