import React from 'react'

import {
    DesignTilesContainer,
    Link,
    AppDesignSquare,
    GraphicDesignSquare,
    ArrowIcon
} from './DesignTiles.styled'

export default function WebDesignTiles() {
  return (
    <DesignTilesContainer>
        <Link to="/App-Design">
            <AppDesignSquare>
                <h2>APP DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </AppDesignSquare>
        </Link>
        <Link to="/Graphic-Design">
            <GraphicDesignSquare>
                <h2>GRAPHIC DESIGN</h2>
                <p>VIEW PROJECTS<ArrowIcon/></p>
            </GraphicDesignSquare>
        </Link>
    </DesignTilesContainer>
  )
}
