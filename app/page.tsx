'use client'

import React from "react"
import Image from "next/image"
import { Star, Shield, Truck, RotateCcw, Heart, Share2, Plus, Minus, Check, Leaf, ChefHat, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-lg bg-green-600 flex items-center justify-center">
                                <Leaf className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-semibold text-xl">Ibergrif</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-8">
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Kitchen Tools
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Recipes
                            </span>
                            <span className="text-sm font-medium text-slate-600 hover:text-slate-900 cursor-pointer transition-colors">
                                Support
                            </span>
                        </nav>
                        <div className="flex items-center space-x-3">
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Heart className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="hidden sm:flex">
                                <Share2 className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Product Section */}
            <section className="py-8 sm:py-12 lg:py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-7xl mx-auto">
                        {/* Product Images */}
                        <div className="space-y-4">
                            <div className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-sm">
                                <Image
                                    src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/597daf61-f2cc-49e0-b187-d953ea0f47c5.jpg?"
                                    alt="Ibergrif Vegetable Spiralizer - Main View"
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {[
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/988b9b00-7886-4fdd-9478-39b3f7d198c5.jpg?", alt: "Spiralizer in action" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/c52880ab-25e3-4ea5-b500-7655071fdc5c.jpg?", alt: "Vegetable noodles result" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/51412141-43f3-4fa9-a83f-4cf92a5f4bf2.jpg?", alt: "Close-up details" },
                                    { src: "https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/c0e2b5ed-fe92-4204-9244-3e0cad802455.jpg?", alt: "Components view" },
                                ].map((image, i) => (
                                    <div
                                        key={i}
                                        className="aspect-square bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-300 hover:scale-105 transition-all duration-200"
                                    >
                                        <Image
                                            src={image.src}
                                            alt={image.alt}
                                            width={150}
                                            height={150}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Product Info */}
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-4">
                                <Badge variant="secondary" className="text-xs font-medium bg-green-100 text-green-700">
                                    🥗 Healthy Living Essential
                                </Badge>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                                    Ibergrif Vegetable Spiralizer
                                </h1>
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        ))}
                                    </div>
                                    <span className="text-sm text-slate-600 font-medium">(3,284 reviews)</span>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                    Transform ordinary vegetables into extraordinary culinary creations! Create restaurant-quality vegetable noodles in seconds with this revolutionary handheld spiralizer.
                                </p>
                            </div>

                            {/* Price */}
                            <div className="space-y-3">
                                <div className="flex items-baseline gap-4">
                                    <span className="text-4xl font-bold text-slate-900">$19.99</span>
                                    <span className="text-xl text-slate-500 line-through">$29.99</span>
                                    <Badge variant="destructive" className="text-sm font-semibold">
                                        33% OFF
                                    </Badge>
                                </div>
                                <p className="text-sm font-medium text-green-600 flex items-center gap-2">
                                    <Check className="h-4 w-4" />
                                    In stock - Ships within 24 hours
                                </p>
                            </div>

                            {/* Key Features */}
                            <div className="grid grid-cols-2 gap-3">
                                {[
                                    { icon: ChefHat, text: "Easy Operation" },
                                    { icon: Sparkles, text: "Premium Steel" },
                                    { icon: Shield, text: "Safe Design" },
                                    { icon: Leaf, text: "Dishwasher Safe" },
                                ].map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-3 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                                    >
                                        <feature.icon className="h-5 w-5 text-green-700" />
                                        <span className="font-medium text-sm">{feature.text}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Quantity & Add to Cart */}
                            <div className="space-y-5">
                                <div className="flex items-center gap-4">
                                    <span className="font-medium text-slate-700">Quantity:</span>
                                    <div className="flex items-center border-2 border-slate-200 rounded-xl overflow-hidden">
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Minus className="h-4 w-4" />
                                        </Button>
                                        <span className="px-6 py-3 min-w-[4rem] text-center font-medium">1</span>
                                        <Button variant="ghost" size="sm" className="h-12 w-12 p-0 hover:bg-slate-100">
                                            <Plus className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <Button
                                        size="lg"
                                        className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow bg-green-600 hover:bg-green-700"
                                    >
                                        Transform Your Vegetables Now - $19.99
                                    </Button>
                                    <Button variant="outline" size="lg" className="w-full h-14 text-lg font-semibold rounded-xl border-2">
                                        Start Your Healthy Journey - Fast Checkout
                                    </Button>
                                </div>
                            </div>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
                                <div className="text-center space-y-2">
                                    <Truck className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">Free Shipping</p>
                                        <p className="text-xs text-slate-500">Orders over $25</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <RotateCcw className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">30-Day Returns</p>
                                        <p className="text-xs text-slate-500">Hassle-free</p>
                                    </div>
                                </div>
                                <div className="text-center space-y-2">
                                    <Shield className="h-7 w-7 mx-auto text-slate-600" />
                                    <div>
                                        <p className="text-sm font-semibold">1-Year Warranty</p>
                                        <p className="text-xs text-slate-500">Full coverage</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Details Tabs */}
            <section className="py-12 sm:py-16 lg:py-20 bg-slate-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <Tabs defaultValue="features" className="w-full">
                            <TabsList className="grid w-full grid-cols-4 h-12 p-1 bg-white rounded-xl shadow-sm">
                                <TabsTrigger value="features" className="rounded-lg font-medium">
                                    Features
                                </TabsTrigger>
                                <TabsTrigger value="specs" className="rounded-lg font-medium">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="reviews" className="rounded-lg font-medium">
                                    Reviews
                                </TabsTrigger>
                                <TabsTrigger value="faq" className="rounded-lg font-medium">
                                    FAQ
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent value="features" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <div className="space-y-6">
                                        <h3 className="text-2xl font-bold text-slate-900">Why Choose Ibergrif Spiralizer?</h3>
                                        <div className="space-y-5">
                                            {[
                                                {
                                                    title: "Effortless Operation",
                                                    description: "Create perfect spirals with just a simple twist - no complicated setup required",
                                                },
                                                {
                                                    title: "Versatile Design",
                                                    description: "Works with zucchini, carrots, cucumbers, potatoes, and many more vegetables",
                                                },
                                                {
                                                    title: "Safe & Durable",
                                                    description: "Protected blade system with finger guard and premium stainless steel construction",
                                                },
                                                {
                                                    title: "Space-Saving",
                                                    description: "Compact design with transparent container that fits easily in any kitchen drawer",
                                                },
                                            ].map((feature, i) => (
                                                <div key={i} className="flex gap-4">
                                                    <Check className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                                                    <div className="space-y-1">
                                                        <h4 className="font-semibold text-slate-900">{feature.title}</h4>
                                                        <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="aspect-video bg-white rounded-2xl shadow-sm overflow-hidden flex items-center justify-center">
                                        <Image
                                            src="https://beasahuotuicaipswzhe.supabase.co/storage/v1/object/public/uploads/a1cf283c-bf9d-4de2-8489-2a09f5bb7d1c.jpg?"
                                            alt="Spiralizer creating vegetable noodles"
                                            width={480}
                                            height={360}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="specs" className="mt-8">
                                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                                    <Card className="shadow-sm border-0">
                                        <CardHeader className="pb-4">
                                            <CardTitle className="text-xl">Technical Specifications</CardTitle>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            {[
                                                { label: "Material", value: "Stainless Steel & BPA-Free Plastic" },
                                                { label: "Blade Type", value: "Premium Japanese Steel" },
                                                { label: "Container Capacity", value: "500ml" },
                                                { label: "Dimensions", value: '4.5" x 4.5" x 6"' },
                                                { label: "Weight", value: "0.8 lbs" },
                                                { label: "Dishwasher Safe", value: "Yes, all components" },
                                                { label: "Colors", value: "Clear/Green" },
                                                { label: "Warranty", value: "1 year" },
                                            ].map((spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                                                >
                                                    <span className="text-slate-600 font-medium">{spec.label}</span>
                                                    <span className="font-semibold text-slate-900">{spec.value}</span>
                                                </div>
                                            ))}
                                        </CardContent>
                                    </Card>
                                    <div className="space-y-6">
                                        <h3 className="text-xl font-bold text-slate-900">What's in the Box</h3>
                                        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
                                            {[
                                                "1x Ibergrif Spiralizer Unit",
                                                "1x Transparent Collection Container",
                                                "1x Finger Protection Guard",
                                                "1x Cleaning Brush",
                                                "1x Recipe Guide",
                                                "1x User Manual",
                                            ].map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <Check className="h-5 w-5 text-green-500" />
                                                    <span className="text-slate-700">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="reviews" className="mt-8">
                                <div className="space-y-8">
                                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                                        <Card className="shadow-sm border-0 bg-white">
                                            <CardContent className="pt-8 text-center">
                                                <div className="text-4xl font-bold mb-3 text-slate-900">4.9</div>
                                                <div className="flex justify-center mb-3">
                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                        <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                                    ))}
                                                </div>
                                                <p className="text-sm text-slate-600 font-medium">Based on 3,284 reviews</p>
                                            </CardContent>
                                        </Card>
                                        <div className="md:col-span-2 space-y-4">
                                            {[5, 4, 3, 2, 1].map((stars) => (
                                                <div key={stars} className="flex items-center gap-4">
                                                    <span className="text-sm font-medium w-8">{stars}★</span>
                                                    <div className="flex-1 bg-slate-200 rounded-full h-3">
                                                        <div
                                                            className="bg-yellow-400 h-3 rounded-full transition-all duration-300"
                                                            style={{ width: stars === 5 ? "85%" : stars === 4 ? "10%" : "5%" }}
                                                        />
                                                    </div>
                                                    <span className="text-sm text-slate-600 font-medium w-16 text-right">
                                                        {stars === 5 ? "2,791" : stars === 4 ? "328" : "165"}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        {[
                                            {
                                                name: "Emma Thompson",
                                                avatar: "ET",
                                                rating: 5,
                                                date: "3 days ago",
                                                title: "Game changer for healthy eating!",
                                                content:
                                                    "I've tried many spiralizers but this one is by far the best. So easy to use and clean. My kids actually ask for zucchini noodles now!",
                                            },
                                            {
                                                name: "James Wilson",
                                                avatar: "JW",
                                                rating: 5,
                                                date: "1 week ago",
                                                title: "Perfect for keto diet",
                                                content:
                                                    "Makes beautiful vegetable noodles every time. The container catches everything perfectly. Great quality and feels very sturdy.",
                                            },
                                            {
                                                name: "Maria Garcia",
                                                avatar: "MG",
                                                rating: 5,
                                                date: "2 weeks ago",
                                                title: "Love it!",
                                                content:
                                                    "Compact, efficient, and safe to use. The finger guard is a great feature. Makes meal prep so much more fun and creative!",
                                            },
                                        ].map((review, i) => (
                                            <Card key={i} className="shadow-sm border-0 bg-white">
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarFallback className="bg-green-100 text-green-700 font-semibold">
                                                                {review.avatar}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1 space-y-2">
                                                            <div className="flex items-center gap-3 flex-wrap">
                                                                <span className="font-semibold text-slate-900">{review.name}</span>
                                                                <div className="flex">
                                                                    {[1, 2, 3, 4, 5].map((star) => (
                                                                        <Star
                                                                            key={star}
                                                                            className={`h-4 w-4 ${star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-300"}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <span className="text-sm text-slate-500">{review.date}</span>
                                                            </div>
                                                            <h4 className="font-semibold text-slate-900">{review.title}</h4>
                                                            <p className="text-slate-600 leading-relaxed">{review.content}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="faq" className="mt-8">
                                <div className="max-w-4xl mx-auto">
                                    <Accordion type="single" collapsible className="w-full space-y-4">
                                        {[
                                            {
                                                question: "What vegetables work best with this spiralizer?",
                                                answer:
                                                    "It works perfectly with zucchini, carrots, cucumbers, potatoes, sweet potatoes, beets, and many other firm vegetables. Softer vegetables like tomatoes are not recommended.",
                                            },
                                            {
                                                question: "Is it really dishwasher safe?",
                                                answer:
                                                    "Yes! All components are dishwasher safe. We recommend placing them on the top rack for best results. The cleaning brush helps remove any stuck pieces before dishwashing.",
                                            },
                                            {
                                                question: "How do I avoid injury while using it?",
                                                answer:
                                                    "The spiralizer comes with a built-in finger protection system. Always use the finger guard when spiralizing smaller vegetables, and never put your fingers near the blades.",
                                            },
                                            {
                                                question: "Can I make different noodle sizes?",
                                                answer:
                                                    "This model creates one size of spiral noodles (approximately 3mm). The consistent size ensures even cooking and professional presentation.",
                                            },
                                            {
                                                question: "How long do the blades stay sharp?",
                                                answer:
                                                    "With proper care, the premium stainless steel blades will stay sharp for years. Avoid cutting frozen vegetables and always hand dry after washing to prevent rust.",
                                            },
                                        ].map((faq, i) => (
                                            <AccordionItem
                                                key={i}
                                                value={`item-${i}`}
                                                className="bg-white rounded-xl px-6 shadow-sm border-0"
                                            >
                                                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                                                    {faq.question}
                                                </AccordionTrigger>
                                                <AccordionContent className="text-slate-600 pb-6 leading-relaxed">
                                                    {faq.answer}
                                                </AccordionContent>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </section>

            {/* Related Products */}
            <section className="py-12 sm:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-8 lg:mb-12 text-center lg:text-left">
                            Complete Your Healthy Kitchen
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                            {[
                                { name: "Vegetable Chopper", price: "$24.99", image: "Vegetable chopper tool" },
                                { name: "Salad Spinner", price: "$19.99", image: "Salad spinner" },
                                { name: "Mandoline Slicer", price: "$29.99", image: "Mandoline slicer" },
                                { name: "Herb Scissors", price: "$12.99", image: "5-blade herb scissors" },
                            ].map((product, i) => (
                                <Card
                                    key={i}
                                    className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                                >
                                    <CardContent className="p-4">
                                        <div className="aspect-square bg-gradient-to-br from-green-50 to-green-100 rounded-xl mb-4 overflow-hidden">
                                            <Image
                                                src="placeholder-logo.png"
                                                alt={product.image}
                                                width={200}
                                                height={200}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="font-semibold mb-2 text-slate-900 text-sm lg:text-base">{product.name}</h3>
                                        <p className="text-lg font-bold text-slate-900">{product.price}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Simplified Footer */}
            <footer className="border-t bg-slate-50 py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 rounded-lg bg-green-600 flex items-center justify-center">
                                <Leaf className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-semibold text-xl">Ibergrif</span>
                        </div>
                        <p className="text-sm text-slate-600 text-center sm:text-right">© 2024 Ibergrif. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}