using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerReact.Models;
using ServerReact.Services.Interfaces;

namespace ServerReact.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private IPostService _postService;
        [HttpPost]
        public PostModel Create(PostModel model)
        {
            return _postService.Create(model);
        }

        [HttpPatch]
        public PostModel Update(PostModel model)
        {
            return model;
        }

        [HttpGet("{id}")]
        public PostModel Get(int id)
        {
            return model;
        }

        [HttpGet]
        public IEnumerable<PostModel>  GetAll()
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
