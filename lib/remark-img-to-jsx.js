import { visit } from 'unist-util-visit'
import sizeOf from 'image-size'
import fs from 'fs'

export default function remarkImgToJsx() {
  return (tree) => {
    visit(
      tree,
      // only visit p tags that contain an img element
      (node) => node.type === 'paragraph' && node.children.some((n) => n.type === 'image'),
      (node) => {
        const imageNode = node.children.find((n) => n.type === 'image')

        // only local files
        if (fs.existsSync(`${process.cwd()}/public${imageNode.url}`)) {
          const dimensions = sizeOf(`${process.cwd()}/public${imageNode.url}`)

          // Convert original node to next/image
          ;((imageNode.type = 'mdxJsxFlowElement'),
            (imageNode.name = 'Image'),
            (imageNode.attributes = [
              { type: 'mdxJsxAttribute', name: 'alt', value: imageNode.alt },
              { type: 'mdxJsxAttribute', name: 'src', value: imageNode.url },
              {
                type: 'mdxJsxAttribute',
                name: 'width',
                value: {
                  type: 'mdxJsxAttributeValueExpression',
                  value: String(dimensions.width),
                  data: {
                    estree: {
                      type: 'Program',
                      body: [
                        {
                          type: 'ExpressionStatement',
                          expression: {
                            type: 'Literal',
                            value: dimensions.width,
                            raw: String(dimensions.width),
                          },
                        },
                      ],
                      sourceType: 'module',
                    },
                  },
                },
              },
              {
                type: 'mdxJsxAttribute',
                name: 'height',
                value: {
                  type: 'mdxJsxAttributeValueExpression',
                  value: String(dimensions.height),
                  data: {
                    estree: {
                      type: 'Program',
                      body: [
                        {
                          type: 'ExpressionStatement',
                          expression: {
                            type: 'Literal',
                            value: dimensions.height,
                            raw: String(dimensions.height),
                          },
                        },
                      ],
                      sourceType: 'module',
                    },
                  },
                },
              },
            ]))

          // Change node type from p to div to avoid nesting error
          node.type = 'div'
          node.children = [imageNode]
        }
      }
    )
  }
}
