import {init, swipeBehavior, viewport} from '@telegram-apps/sdk';

const mountEvents = () => {
    swipeBehavior.mount()
    viewport.mount()
}

const settingEvents = () => {
    viewport.expand()
    swipeBehavior.disableVertical()
}

export const initTelegramAPI = () => {
    init()
    mountEvents()
    settingEvents()
}

