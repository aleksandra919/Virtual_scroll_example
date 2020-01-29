import React from 'react'

const VirtualScroll = ({
    itemCount,
    height,
    rowHeight,
    itemData,
    nodePadding = 20
}) => {
    const scrollTop = 20

    const totalHeight = itemCount * height

    let startNode = Math.floor(scrollTop / rowHeight) - nodePadding
    startNode = Math.max(0, startNode);

    let visibleNodeCount = Math.ceil(totalHeight / rowHeight) + 2 * nodePadding
    visibleNodeCount = Math.min(itemCount - startNode, visibleNodeCount)

    let offsetY = startNode * rowHeight


    const visibleChildren = ({ itemData, visibleNodeCount, startNode }) => {
        console.log('item data', itemData[2])
        return (
            <div>
                test
          </div>
        );

    }


    return (
        // viewPort
        <div
            className="viewport"
            style={{
                overflow: "hidden",
                willChange: "transform",
                height: totalHeight,
                position: "relative",
                // backgroundColor: 'blue'
            }}
        >
            {/* visible Nodes */}
            <div
                style={{
                    backgroundColor: 'pink',
                    willChange: "transform",
                    transform: `translateY(${offsetY}px)`
                }}
            >
                {visibleChildren}

            </div>
        </div>
    )
}

export default VirtualScroll
