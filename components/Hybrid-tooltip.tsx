'use client'

import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react'
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from './tooltip'
import { Popover, PopoverTrigger, PopoverContent } from './popover'
import { TooltipContentProps, TooltipProps, TooltipTriggerProps } from '@radix-ui/react-tooltip'
import { PopoverContentProps, PopoverProps, PopoverTriggerProps } from '@radix-ui/react-popover'

const TouchContext = createContext<boolean | undefined>(undefined)
const useTouch = () => useContext(TouchContext)

export const TouchProvider = (props: PropsWithChildren) => {
  const [isTouch, setTouch] = useState<boolean>()

  useEffect(() => {
    setTouch(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  return <TouchContext.Provider value={isTouch} {...props} />
}

export const HybridTooltip = (props: TooltipProps & PopoverProps) => {
  const isTouch = useTouch()

  return isTouch ? (
    <Popover {...props} />
  ) : (
    <TooltipProvider>
      <Tooltip {...props} />
    </TooltipProvider>
  )
}

export const HybridTooltipTrigger = (props: TooltipTriggerProps & PopoverTriggerProps) => {
  const isTouch = useTouch()

  return isTouch ? (
    <PopoverTrigger {...props} />
  ) : (
    <TooltipProvider>
      <TooltipTrigger {...props} />
    </TooltipProvider>
  )
}

export const HybridTooltipContent = (props: TooltipContentProps & PopoverContentProps) => {
  const isTouch = useTouch()

  return isTouch ? (
    <PopoverContent {...props} />
  ) : (
    <TooltipProvider>
      <TooltipContent {...props} />
    </TooltipProvider>
  )
}
