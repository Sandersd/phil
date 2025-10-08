# Parallax Scene Customization Checklist

## 🎨 **Phase 1: Colors & Materials**

### 1.1 Replace Object Colors
- **File**: `components/three/FloatingObject.tsx`
- **Current**: Gold theme (`#E0C163`)
- **Tasks**:
  - [ ] Change `color` property (main object color)
  - [ ] Update `emissive` property (glow color) 
  - [ ] Adjust `emissiveIntensity` (0.0-1.0 for glow strength)
  - [ ] Modify `metalness` (0.0-1.0 for metal vs plastic look)
  - [ ] Adjust `roughness` (0.0-1.0 for shiny vs matte finish)

### 1.2 Update Site Color Scheme
- **File**: `app/globals.css`
- **Current Colors**:
  - `--bg`: Dark blue background (10 14 18)
  - `--gold`: Gold accent (224 193 99)
  - `--accent`: Cyan (0 212 255)
- **Tasks**:
  - [ ] Update CSS color variables to match new theme
  - [ ] Test contrast ratios for accessibility
  - [ ] Update button colors if needed

### 1.3 Lighting Adjustments
- **File**: `components/three/Scene.tsx` 
- **Tasks**:
  - [ ] Adjust `ambientLight intensity` (currently 0.5)
  - [ ] Modify `pointLight position` and `intensity` (currently [10,10,10], 0.8)
  - [ ] Add colored lighting if desired
  - [ ] Update `Environment preset` (current: "city")

## 🏗️ **Phase 2: 3D Models**

### 2.1 Replace Basic Geometries with Custom Models
- **Current**: Box, Sphere, Cone primitives
- **Tasks**:
  - [ ] Create/source GLB/GLTF model files
  - [ ] Place models in `/public/models/` directory
  - [ ] Update `FloatingObject.tsx` to load custom models
  - [ ] Use `useGLTF` hook from `@react-three/drei`
  - [ ] Adjust model scales and rotations

### 2.2 Model Optimization
- **Tasks**:
  - [ ] Ensure models are web-optimized (< 1MB each recommended)
  - [ ] Use Draco compression if available
  - [ ] Test loading performance
  - [ ] Add loading fallbacks

### 2.3 Model Variety
- **Current**: 8 objects (3 box, 3 sphere, 2 cone)
- **Tasks**:
  - [ ] Create different model types for visual interest
  - [ ] Ensure models fit the site's theme/brand
  - [ ] Consider animation compatibility

## ⚡ **Phase 3: Animation & Behavior**

### 3.1 Mouse Parallax Tuning
- **File**: `components/three/Scene.tsx`
- **Current**: 0.1 intensity
- **Tasks**:
  - [ ] Adjust mouse influence intensity (line 41-42)
  - [ ] Modify group rotation multiplier (line 51-52)
  - [ ] Change lerp speed for responsiveness (line 36-37)

### 3.2 Float Animation Settings
- **File**: `components/three/Scene.tsx`
- **Current**: Various speed/intensity combinations
- **Tasks**:
  - [ ] Customize `speed` values (1.5-3.5 range)
  - [ ] Adjust `rotationIntensity` (0.2-0.7 range)
  - [ ] Modify `floatIntensity` (0.3-0.9 range)
  - [ ] Create themed animation patterns

### 3.3 Object Rotation
- **File**: `components/three/FloatingObject.tsx`
- **Tasks**:
  - [ ] Modify rotation speeds (currently 0.5 and 0.3)
  - [ ] Add different rotation patterns per object type
  - [ ] Sync rotations with site theme

## 📐 **Phase 4: Layout & Positioning**

### 4.1 Object Positioning
- **File**: `components/three/Scene.tsx`
- **Current**: 8 objects spread across scene
- **Tasks**:
  - [ ] Adjust X positions (-8 to +7 range)
  - [ ] Modify Y positions (-3 to +4 range) 
  - [ ] Change Z depths (-4 to +4 range)
  - [ ] Create balanced composition

### 4.2 Scene Density
- **Tasks**:
  - [ ] Add/remove objects as needed
  - [ ] Ensure no visual overcrowding
  - [ ] Test on different screen sizes
  - [ ] Maintain performance (aim for 60fps)

### 4.3 Camera Settings
- **Tasks**:
  - [ ] Adjust camera position (currently [0,0,10])
  - [ ] Modify field of view if needed
  - [ ] Update near/far clipping planes

## 🎯 **Phase 5: Brand Integration**

### 5.1 Theme Alignment
- **Tasks**:
  - [ ] Match 3D objects to business type (antiques = vintage items)
  - [ ] Use brand colors consistently
  - [ ] Ensure professional appearance
  - [ ] Test with actual content

### 5.2 Performance Optimization
- **Tasks**:
  - [ ] Monitor frame rates across devices
  - [ ] Optimize model polycount
  - [ ] Test on mobile devices
  - [ ] Add reduced-motion fallbacks

### 5.3 Accessibility
- **Tasks**:
  - [ ] Ensure scene respects `prefers-reduced-motion`
  - [ ] Provide alternative experiences if needed
  - [ ] Test with screen readers
  - [ ] Maintain keyboard navigation

## 🔧 **Quick Start Examples**

### Example: Antique Theme
```tsx
// Gold → Warm brown objects
color="#8B4513"
emissive="#CD853F" 
emissiveIntensity={0.05}

// Models: vintage items, ornate frames, old books
// Slower, more elegant animations
```

### Example: Modern Tech Theme  
```tsx
// Gold → Electric blue
color="#00BFFF"
emissive="#1E90FF"
emissiveIntensity={0.2}

// Models: geometric shapes, tech devices
// Faster, sharper animations
```

### Example: Nature Theme
```tsx
// Gold → Forest green
color="#228B22"
emissive="#32CD32"
emissiveIntensity={0.08}

// Models: leaves, stones, organic shapes
// Gentle, flowing animations
```

## 📝 **Step-by-Step Guide**

### Getting Started (30 minutes)
1. **Choose your theme** - Decide on colors and concept
2. **Update colors** - Modify `FloatingObject.tsx` materials
3. **Test changes** - Run `npm run dev` to see updates
4. **Adjust lighting** - Tweak scene lighting to match

### Adding Custom Models (1-2 hours)
1. **Find/create models** - Source GLB files under 1MB each
2. **Place in `/public/models/`** - Organize by type
3. **Update FloatingObject component** - Replace geometries with models
4. **Test performance** - Ensure smooth 60fps

### Fine-tuning (30-60 minutes) 
1. **Adjust positions** - Move objects for better composition
2. **Tune animations** - Modify speeds and intensities
3. **Test responsiveness** - Check mouse parallax feel
4. **Mobile testing** - Verify performance on mobile

## 🚀 **Current Implementation Details**

### Files to Modify
- `components/three/FloatingObject.tsx` - Object appearance and models
- `components/three/Scene.tsx` - Layout, animations, lighting
- `app/globals.css` - Color scheme and themes

### Key Settings
- **Mouse Parallax Intensity**: `0.1` (increase for stronger effect)
- **Object Count**: `8` objects currently
- **Position Range**: X(-8 to 7), Y(-3 to 4), Z(-4 to 4)
- **Float Speeds**: `1.5` to `3.5` range
- **Current Colors**: Gold theme `#E0C163`

### Performance Notes
- Scene runs at 60fps with 8 objects
- Uses enhanced mouse parallax (5x stronger than default)
- Respects `prefers-reduced-motion` setting
- No scroll conflicts (scroll parallax removed)

---

**Pro Tip**: Start with Phase 1 (colors) for immediate visual impact, then move to Phase 2 (models) for the biggest transformation!