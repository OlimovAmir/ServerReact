using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ServerReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        [HttpPost]
        public object Create(object model)
        {
            return model;
        }

        [HttpPatch]
        public object Update(object model)
        {
            return model;
        }

        [HttpGet]
        public object Get(int id)
        {
            return model;
        }

        [HttpGet("{id}")]
        public object GetAll()
        {
            return model;
        }

        [HttpDelete("{id}")]
        public object Delete(int id)
        {
            return model;
        }
    }
}
