import type { ImgHTMLAttributes } from 'vue'
// src/types/reka-ui.d.ts
import 'reka-ui'

declare module 'reka-ui' {
  interface AvatarImageProps {
    'data-slot'?: string
    'alt'?: ImgHTMLAttributes['alt']
  }
}
