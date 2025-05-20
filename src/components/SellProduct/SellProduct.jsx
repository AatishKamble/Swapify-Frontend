import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import LoginPrompt from "../Auth/LoginPrompt"
import ProductsUpload from "./ProductsUpload.jsx"
import SellCategory from "./SellCategory.jsx"

const SellProduct = () => {
  const navigate = useNavigate()
  const auth = useSelector((store) => store.auth)
  const [showLoginPrompt, setShowLoginPrompt] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState({
    mainCategory: "",
    subcategory: "",
  })

  // Check authentication on mount
  useEffect(() => {
    if (!auth.user) {
      setShowLoginPrompt(true)
    }
  }, [auth.user])

  const handleLoginConfirm = () => {
    setShowLoginPrompt(false)
    // Store current route to return after login
    localStorage.setItem("returnUrl", "/sell-product")
    navigate("/signin")
  }

  const handleLoginCancel = () => {
    setShowLoginPrompt(false)
    navigate("/") // Go to home page
  }

  const backButton = () => {
    setSelectedCategory({
      mainCategory: "",
      subcategory: "",
    })
  }

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  }

  // If not authenticated, only show login prompt
  if (!auth.user) {
    return (
      <div className="min-h-screen bg-gray-50">
        {showLoginPrompt && (
          <LoginPrompt 
            onConfirm={handleLoginConfirm}
            onCancel={handleLoginCancel}
            message="Please sign in to list your products for sale."
          />
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatePresence mode="wait">
        {selectedCategory.mainCategory === "" || selectedCategory.subcategory === "" ? (
          <motion.div key="category-selection" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
            <SellCategory onSelectCategory={setSelectedCategory} selectedCategory={selectedCategory} />
          </motion.div>
        ) : (
          <motion.div key="product-upload" initial="initial" animate="animate" exit="exit" variants={pageVariants}>
            <ProductsUpload selectedCategory={selectedCategory} backButton={backButton} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SellProduct