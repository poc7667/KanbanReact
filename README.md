# launch webpack-dev-server

go to the `parent` folder of `Kanban`

run `webpack-dev-server`

# 2016-08-09

## KanbanContainer.jsx
        
        // 這裡的 && 意思 是說 children!=null 才去做事情
        // 因為 cloneElement 第一個元素如果是 null 會噴錯, 才用 this.props.children 去做保護
        let cardModal = this.props.children && 
                        React.cloneElement(this.props.children,
                            {
                                cards: this.props.cards,
                                cardCallbacks: this.props.cardCallbacks
                            }
                        );

如果你點選了  NewCard -(then)-> this.props.children 會變成 newCard component

如果什麼都沒有點選，就會變成null

換句話說 this.props.children 有三種可能 null, 

                <Route component={App}>
                    <Route path="/" component={KanbanContainer}>
                        <Route path="new" component={NewCard}/>
                        <Route path="edit/:card_id" component={EditCard}/>
                    </Route>
                </Route>




設定 NVM 環境

- nvm install 6

- nvm use 6

# 2016-07-26

webpack-dev-server

hotswap 動態更新



# instructors

> minwu.training@gmail.com

this.props , this.state 控制了 components 該怎麼去render

用data flow 去思考 react, abadon DOM manipulation.

# Webpack cheatsheet

- RealTime watch the files and rebuild on any changes
    - `webpack --watch `
- [webpack 使用教程](https://www.zfanw.com/blog/webpack-tutorial.html)


# Resources

[c9 workspace on-class](https://ide.c9.io/winwust/ucsc-react-class-kanban)