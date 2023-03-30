import clsx from 'clsx'
import React, { HTMLProps, PropsWithChildren } from 'react'

export const SimpleContainer: React.FC<
  PropsWithChildren<HTMLProps<HTMLDivElement>>
> = ({ children, className, ...props }) => {
  return (
    <div className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">
        <div
          className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
          {...props}
        >
          <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  )
}
