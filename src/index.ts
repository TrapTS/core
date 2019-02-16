import * as Koa from 'koa'

type Middleware = (ctx: Koa.Context, next?: any) => any | Promise<any>

declare class InitServer {
  public bindToContext<T>(name: string, func: T): T
  public keys(args: string[]): any
  public use(middleware: Middleware): any
  public start(port: number): void
}

export class Server implements InitServer {
  private app = new Koa()

  public bindToContext<T>(name: string, func: T): T {
    return (this.app.context[name] = func)
  }

  public keys(args: string[]) {
    return (this.app.keys = args)
  }

  public use(middleware: Middleware) {
    return this.app.use(middleware)
  }

  public async start(port: number): Promise<void> {
    await this.app.listen(port, () => {
      console.info('Application is listening port:', port)
    })
  }
}
