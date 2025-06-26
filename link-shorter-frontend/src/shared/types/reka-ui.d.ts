import type { ImgHTMLAttributes } from 'vue'
import 'reka-ui'

declare module 'reka-ui' {
  interface AvatarRootProps {
    dataSlot: string
    alt?: ImgHTMLAttributes['alt']
  }

  interface ComponentCustomProps {
    dataSlot: string
    as: AsTag | Component
  }

  interface AllowedComponentProps {
    dataSlot: string
    as: AsTag | Component
  }
}
