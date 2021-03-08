# aframe-play-sound-on-event

This is a component for AFRAME which allows events to trigger sounds. 

## API

| Property | Description | Default Value |
| -------- | ----------- | ------------- |
| event    | The event which triggers sound. | `click` |
| type     | Specifies semantics. See chart below. | `one-shot` |

| Type | Semantics |
| -------- | ----------- |
| `play-only` | When the event is triggered, `playSound()` will be called on the sound component.  |
| `one-shot` | When the event is triggered, `stopSound()` then `playSound()` will be called on the sound component. |
| `toggle-pause` | When the event is triggered, `playSound()` will be called if the sound is stopped or paused, `pauseSound()` will be called if the sound is playing. |
| `toggle-stop` | When the event is triggered, `playSound()` will be called if the sound is stopped or paused, `stopSound()` will be called if the sound is playing. |

Calling `pause()` on this component will disable remove listeners, effectively disabling the functionality of this component. It will not directly pause audio.   
Calling `play()` will recreate listeners if `pause()` has been called previously. Otherwise this will do nothing.

### Installation

#### Browser Installation

Install and use by directly including the [browser files](dist):

```html
<head>
  <title>My A-Frame Scene</title>
  <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
  <script src="https://unpkg.com/aframe-play-sound-on-event@1.0.2/dist/aframe-play-sound-on-event.min.js"></script>
</head>

<body>
  <a-scene>
  
    <a-assets>
      <audio id="ambient_music" src="audio/Coin_Machine.mp3"></audio>
    </a-assets>
    
    <a-entity
      sound="src: #ambient_music"
      play-sound-on-event="mode: toggle-stop; event: click"
      geometry="primitive: box">
    </a-entity>
    
  </a-scene>
</body>
```

#### NPM Installation

Install via NPM:

```bash
npm install aframe-play-sound-on-event
```

Then register and use.

```js
require('aframe');
require('aframe-play-sound-on-event');
```
