# LaunchSprint - Project Overview

## One-line summary
LaunchSprint is a macOS menu bar app that provides a fast, customizable app launcher with search, folders, and drag-and-drop ordering.

## What the app does
LaunchSprint gives you an on-demand app grid so you can find and start apps without leaving your current context. It lives in the macOS menu bar, opens a grid-based launcher window on demand, and lets you organize apps into folders and custom layouts. It is designed to keep focus and reduce context switching.

## User perspective (how it feels)
- I press a shortcut and a clean grid of my apps appears instantly.
- I type a few letters and the list narrows immediately.
- I use arrow keys to pick an app and hit Enter to open it.
- I can group tools into folders and keep my own layout.
- When I close it, I am right back where I was.

## Primary goals
- Fast access to installed macOS apps via search and grid navigation.
- Custom organization: manual order, folders, and drag-and-drop.
- Always available: menu bar icon + global hotkey.
- Clean, minimal UI with glassmorphism styling.

## Key user flows
1. **Open**
   - Click the menu bar icon, or press the global hotkey `ctrl+option+command+L`.
2. **Search and launch**
   - Type to filter apps immediately.
   - Use arrow keys to move selection and press Enter to launch.
3. **Organize**
   - Switch to Edit mode, then drag apps to reorder.
   - Drop an app onto a folder to add it.
   - Create a folder from an app and rename it.
4. **Settings**
   - Toggle full-screen vs windowed launcher.
   - Adjust icon size.
   - Choose a highlight color.
   - Reset settings and ordering.

## UI overview
- **Menu bar icon**: entry point, plus a small menu (About, Open, Quit).
- **Launcher window**:
  - Search bar at the top.
  - Action buttons for A-Z sorting, custom order, edit mode, settings, and close.
  - Grid of app icons with names.
- **Folders**:
  - Folder overlay shows apps inside the folder.
  - Rename field at the top of the overlay.
- **Settings panel**:
  - Slides in from the right as an overlay.

## Technical architecture
- **Platform**: macOS
- **UI**: SwiftUI, with AppKit bridging for advanced windowing and visual effects.
- **Global hotkey**: via the `HotKey` package.
- **Storage**: UserDefaults for settings and custom ordering.
- **App discovery**: scans standard macOS application directories.

## Data model
- `AppItem`
  - Represents either an app or a folder.
  - Fields: `id`, `name`, `path`, `type`, `children`, `icon`.
  - `type` is `.app` or `.folder`.
- `AppManager`
  - Central ObservableObject that holds the app list and settings.
  - Handles sorting, custom order persistence, folders, and metadata refresh.

## Persistence strategy
- Custom ordering and folder structure are serialized to JSON and stored in UserDefaults.
- Settings (fullscreen, icon size, selection color) are stored in UserDefaults.
- On launch, saved layout is reconciled with currently installed apps: removed apps are pruned, new apps are appended.

## Keyboard navigation
- Arrow keys move selection in the grid.
- Enter launches the selected app (or opens a folder).
- Escape/back closes overlays or the launcher window.

## Main code locations
- `LaunchSprint/LaunchSprintApp.swift`
  - App entry point, menu bar integration, window setup, hotkey setup.
- `LaunchSprint/ContentView.swift`
  - Main SwiftUI UI: search, grid, drag-and-drop, settings panel, folder overlay.
- `LaunchSprint/AppModel.swift`
  - Core data model and app discovery logic.
- `LaunchSprint/AboutView.swift`
  - About window UI.

## Dependencies
- `HotKey` (https://github.com/soffes/HotKey)

## Notes for website/marketing
- Emphasize speed and focus: open instantly, no context switching.
- Highlight customization: folders, drag-and-drop order, icon size, color.
- Mention menu bar + global hotkey access.
- Mention search-first flow and keyboard navigation.

## Non-app folder in repo
- `frontend/` exists but is not used by the macOS app (only a `.vite` folder inside).
