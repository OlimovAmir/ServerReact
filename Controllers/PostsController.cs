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
            return _postService.Update(model);
        }

        [HttpGet("{id}")]
        public PostModel Get(int id)
        {
            return _postService.Get(id);
        }

        [HttpGet]
        public IEnumerable<PostModel>  GetAll()
        {
            return _postService.Get();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _postService.Delete(id); // можно развернуть в try catch
            return Ok();
        }
    }
}
