((state, timeLeftFn) => {
    const globalCoords = state['global-coords']
    const globalSize = state['global-dimensions']
    const move = {
      action: 'move', metadata: {}
    }
    const turn = (dir) => {
      return {
        action: 'turn',
        metadata: {
          direction: dir
        }
      }
    }
    let saved = state['saved-state']
    if (!saved) {
      return {
        command: move, 
        state
      }
    }
    let diff = [globalCoords[0] - saved['global-coords'][0], globalCoords[1] - saved['global-coords'][1]]
    if (diff[0] < 0) {
      state.facing = 'right'
    }else if (diff[0] > 0) {
      state.facing = 'left'
    }else if (diff[1] > 0) {
      state.facing = 'down'
    }else if (diff[1] < 0) {
      state.facing = 'up'
    }
    command = {
      action: 'shoot'
    }

    return {
        command,
        state
    };
});
