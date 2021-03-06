/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

/**
 * The Scene Transition Complete Event.
 * 
 * This event is dispatched by the Target Scene of a transition.
 * 
 * It happens when the transition process has completed. This occurs when the duration timer equals or exceeds the duration
 * of the transition.
 * 
 * Listen to it from a Scene using `this.scene.events.on('transitioncomplete', listener)`.
 * 
 * The Scene Transition event flow is as follows:
 * 
 * 1) [TRANSITION_OUT]{Phaser.Scenes.Events#TRANSITION_OUT} - the Scene that started the transition will emit this event.
 * 2) [TRANSITION_INIT]{Phaser.Scenes.Events#TRANSITION_INIT} - the Target Scene will emit this event if it has an `init` method.
 * 3a) [TRANSITION_START]{Phaser.Scenes.Events#TRANSITION_START} - the Target Scene will emit this event after its `create` method is called, OR ...
 * 3b) [TRANSITION_WAKE]{Phaser.Scenes.Events#TRANSITION_WAKE} - the Target Scene will emit this event if it was asleep and has been woken-up to be transitioned to.
 * 4) [TRANSITION_COMPLETE]{Phaser.Scenes.Events#TRANSITION_COMPLETE} - the Target Scene will emit this event when the transition finishes.
 * 
 * @event Phaser.Scenes.Events#TRANSITION_COMPLETE
 * 
 * @param {Phaser.Scene} scene -The Scene on which the transitioned completed.
 */
module.exports = 'transitioncomplete';
