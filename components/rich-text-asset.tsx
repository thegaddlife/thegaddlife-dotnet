import ContentfulImage from './contentful-image'

export default function RichTextAsset({ id, assets }) {
  const asset = assets?.find((asset) => asset.sys.id === id)

  if (asset?.url) {
    return (
      <div
        style={{
          position: 'relative',
          height: '400px',
          maxHeight: '400px'
        }}
      >
        <ContentfulImage
          src={asset.url}
          layout="fill"
          alt={asset.description}
        />
      </div>
    )
  }

  return null
}
