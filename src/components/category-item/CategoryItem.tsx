import React from 'react'
import { Category } from '../../entities'
import './category-item.styles.scss'

interface CategoryItemProps {
  category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
  const { title, imageUrl } = category
  return (
    <div className="category-container">
      <div 
        className='category-image' 
        style={{ backgroundImage: `url(${imageUrl})` }} 
      />
      <div className='category-text'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
}

export default CategoryItem