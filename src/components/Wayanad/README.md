# Wayanad Attraction Images Management

This directory contains the components and utilities for managing images for Wayanad tourist attractions.

## Structure

```
src/components/Wayanad/
├── components/
│   ├── EnhancedAttractionCard.tsx    # Enhanced card component with image handling
│   ├── ImageManager.tsx              # Image management interface
│   └── Hero.tsx                      # Hero component
├── utils/
│   └── attractionImages.ts           # Image management utilities
├── Data/
│   └── data.json                     # Attraction data
├── wayanadPage.tsx                   # Main page component
├── wayanadPage.cms.tsx               # CMS version of the page
└── README.md                         # This file
```

## Image Management

### Current Attractions

The system supports 13 Wayanad attractions, each with its own image:

1. **Tholpetty Wildlife Sanctuary** - `/images/wayanad/tholpetty-wildlife-sanctuary.jpg`
2. **Muthanga Wildlife Sanctuary** - `/images/wayanad/muthanga-wildlife-sanctuary.jpg`
3. **Karapuzha Dam** - `/images/wayanad/karapuzha-dam.jpg`
4. **Kuruva Island** - `/images/wayanad/kuruva-island.jpg`
5. **Pookkode Lake** - `/images/wayanad/pookkode-lake.jpg`
6. **Soochipara Waterfalls** - `/images/wayanad/soochipara-waterfalls.jpg`
7. **Banasurasagar Dam** - `/images/wayanad/banasurasagar-dam.jpg`
8. **Edakkal Caves** - `/images/wayanad/edakkal-caves.jpg`
9. **Thirunelli Temple** - `/images/wayanad/thirunelli-temple.jpg`
10. **Chembra Peak** - `/images/wayanad/chembra-peak.jpg`
11. **Chain Tree** - `/images/wayanad/chain-tree.jpg`
12. **Neelimala View Point** - `/images/wayanad/neelimala-view-point.jpg`
13. **Lakkidi View Point** - `/images/wayanad/lakkidi-view-point.jpg`

### Adding Images

1. **Place your images** in the `public/images/wayanad/` directory
2. **Use descriptive filenames** that match the attraction names
3. **Recommended format**: JPG or WebP for photos, SVG for icons
4. **Recommended size**: 16:9 aspect ratio, minimum 800x450px

### Image Management Interface

In development mode, you'll see a "Manage Images" button in the bottom-right corner. This interface allows you to:

- View all current image paths
- Update image paths for specific attractions
- See which images are missing or failed to load

### Fallback Images

If an image fails to load, the system will show a placeholder SVG image located at `/images/wayanad/placeholder.svg`.

### Updating Images

#### Method 1: Using the Image Manager (Development)
1. Click the "Manage Images" button
2. Select the attraction you want to update
3. Enter the new image path
4. Click "Update Image"

#### Method 2: Direct File Update
1. Update the image path in `src/File/wayanadpage.md`
2. Update the corresponding entry in `src/components/Wayanad/utils/attractionImages.ts`

#### Method 3: CMS Update
If using Netlify CMS, update the image paths in the CMS interface.

### Image Optimization

For best performance:

1. **Compress images** before uploading
2. **Use WebP format** when possible
3. **Optimize for web** (72 DPI is sufficient)
4. **Keep file sizes under 500KB** per image
5. **Use descriptive alt text** for accessibility

### Troubleshooting

#### Image Not Loading
- Check if the file exists in the correct directory
- Verify the file path is correct
- Ensure the file format is supported (JPG, PNG, WebP, SVG)
- Check browser console for errors

#### Image Manager Not Showing
- Ensure you're in development mode (the ImageManager only shows in dev mode)
- Check if the ImageManager component is imported and rendered

#### Fallback Image Issues
- Verify `/images/wayanad/placeholder.svg` exists
- Check if the fallback path is correctly set in `attractionImages.ts`

## Technical Details

### Components

- **EnhancedAttractionCard**: Enhanced version with loading states, error handling, and fallback images
- **ImageManager**: Development tool for managing image paths
- **WayanadPageCMS**: Main page component that renders all attractions

### Utilities

- **attractionImages.ts**: Contains image metadata, paths, and management functions
- **getAttractionImage()**: Get image data by attraction title
- **getAttractionImageById()**: Get image data by attraction ID
- **updateAttractionImage()**: Update image path for an attraction

### Data Flow

1. Markdown file (`wayanadpage.md`) contains attraction data with image paths
2. CMS hook (`useWayanadCMS`) loads and parses the data
3. Page component renders attractions using `EnhancedAttractionCard`
4. Each card handles its own image loading and error states
5. Image manager provides development tools for path updates

## CMS Management

### Managing Wayanad Page Content

The Wayanad page content can be managed through Netlify CMS. Here's how to access and edit the content:

#### Accessing the CMS
1. Go to `/admin` on your website
2. Navigate to "Wayanad Page" in the sidebar
3. Click on "Wayanad Page Content" to edit

#### Editable Fields

**SEO Settings:**
- **Page Title**: The main title for the page (appears in browser tab)
- **Meta Description**: Description for search engines
- **Keywords**: SEO keywords for the page
- **Author**: Content author information

**Hero Section:**
- **Hero Background Image**: Main hero image for the page
- **Hero Title**: Large title displayed on the hero section

**Attractions:**
- **Attraction Title**: Name of the tourist attraction
- **Description**: Detailed description with markdown support
- **Attraction Image**: Image for the specific attraction

**Page Content:**
- **Body**: Main page content with markdown support

#### Managing Attractions

1. **Add New Attraction:**
   - Click the "+" button in the Attractions section
   - Fill in the title, description, and upload an image
   - Save the changes

2. **Edit Existing Attraction:**
   - Click on any attraction in the list
   - Modify the title, description, or image
   - Save the changes

3. **Reorder Attractions:**
   - Use the drag handles to reorder attractions
   - The order will be reflected on the website

4. **Delete Attraction:**
   - Click the trash icon next to an attraction
   - Confirm the deletion

#### Image Management

- **Hero Image**: Upload a high-quality image (recommended: 1920x1080px)
- **Attraction Images**: Upload images for each attraction (recommended: 16:9 aspect ratio)
- **Image Optimization**: The CMS will automatically optimize uploaded images

#### FAQ Management

FAQs are managed separately through the "FAQs" collection in the CMS:
1. Go to "FAQs" in the sidebar
2. Click on "Wayanad Page FAQs"
3. Add, edit, or remove FAQ items
4. The FAQs will automatically appear on the Wayanad page

### Publishing Changes

1. **Draft Mode**: Changes are saved as drafts by default
2. **Publish**: Click "Publish" to make changes live
3. **Preview**: Use the preview button to see changes before publishing

### Best Practices

1. **Content Guidelines:**
   - Keep descriptions concise but informative
   - Use high-quality images
   - Include relevant keywords naturally

2. **Image Guidelines:**
   - Use descriptive filenames
   - Optimize images before uploading
   - Maintain consistent aspect ratios

3. **SEO Guidelines:**
   - Write compelling meta descriptions
   - Include relevant keywords
   - Keep titles under 60 characters

## Future Enhancements

- [ ] Add image upload functionality
- [ ] Implement image cropping and resizing
- [ ] Add image lazy loading optimization
- [ ] Create image gallery for each attraction
- [ ] Add image metadata management (alt text, captions)
- [ ] Implement image caching strategies
- [ ] Add content versioning
- [ ] Implement content approval workflow 