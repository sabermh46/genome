'use client'
import { useRef } from 'react'
import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
import {
  initializeProduct,
  setProductName,
  Product
} from '../lib/features/product/productSlice'

export default function ProductName({ product }: { product: Product }) {
  // Initialize the store with the product information
  const store = useAppStore()
  const initialized = useRef(false)
  if (!initialized.current) {
    store.dispatch(initializeProduct(product))
    initialized.current = true
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const name = useAppSelector((state:any) => state.product.name)
  const dispatch = useAppDispatch()

  return (
    <input
      value={name}
      onChange={e => dispatch(setProductName(e.target.value))}
    />
  )
}