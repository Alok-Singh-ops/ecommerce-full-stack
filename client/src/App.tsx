//             onClick={() => setCurrentView('signup')}
//           >
//             Need an account? Sign up
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );

//   const SignupForm: React.FC = () => (
//     <Card className="w-full max-w-md mx-auto mt-8">
//       <CardHeader>
//         <CardTitle>Sign Up</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleSignup} className="space-y-4">
//           <div>
//             <Input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <Input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//           </div>
//           <div>
//             <Input
//               type="password"
//               name="confirmPassword"
//               placeholder="Confirm Password"
//               value={formData.confirmPassword}
//               onChange={handleInputChange}
//             />
//           </div>
//           {error && (
//             <Alert variant="destructive">
//               <AlertDescription>{error}</AlertDescription>
//             </Alert>
//           )}
//           <Button type="submit" className="w-full">
//             Sign Up
//           </Button>
//           <Button
//             type="button"
//             variant="outline"
//             className="w-full"
//             onClick={() => setCurrentView('login')}
//           >
//             Already have an account? Login
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );

//   const ProductList: React.FC = () => (
//     <Card className="w-full max-w-4xl mx-auto mt-8">
//       <CardHeader className="flex flex-row justify-between items-center">
//         <CardTitle>{isAdmin ? 'Admin Product Dashboard' : 'Products'}</CardTitle>
//         <Button variant="outline" onClick={handleLogout}>
//           Logout
//         </Button>
//       </CardHeader>
//       <CardContent>
//         <div className="grid gap-4">
//           {products.map((product: Product) => (
//             <div
//               key={product.id}
//               className="p-4 border rounded-lg flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="font-medium">{product.name}</h3>
//                 <p className="text-sm text-gray-500">${product.price}</p>
//               </div>
//               {isAdmin && (
//                 <div className="flex items-center gap-2">
//                   <span className="text-sm">Stock: {product.stock}</span>
//                   <Button size="sm">Edit</Button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );

//   return (
//     <div className="container mx-auto p-4">
//       {currentView === 'login' && <LoginForm />}
//       {currentView === 'signup' && <SignupForm />}
//       {currentView === 'products' && <ProductList />}
//     </div>
//   );
// };

// export default App;


import React from 'react'

const App = () => {
  return (
    <div>
   hi there 
    </div>
  )
}

export default App
