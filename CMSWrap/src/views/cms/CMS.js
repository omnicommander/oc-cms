import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {useLocation } from 'react-router-dom'
import grapesjs from 'grapesjs'
import exportPlugin from 'grapesjs-plugin-export'
import gjsPresetWebpage from 'grapesjs-preset-webpage'
import {blockCode} from './blocks/tier4Template_1';
import {heroImage_1} from './blocks/heroImage1/heroImage_1';
import {heroImage_2} from './blocks/heroImage2/heroImage_2';
import {ctas} from './blocks/cta1/callsToAction';
import {CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {cilSave, cilFile} from '@coreui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { thin } from '@fortawesome/fontawesome-svg-core/import.macro'


function CMS (props) {
  const state = useSelector((state) => state);
  const [editor, setEditor] = useState(null);
  const location = useLocation();

  const [page_id, setPageId] = useState(location.state.id);
  useEffect(() =>{
    localStorage.clear();
    setPageId(location.state.id);
    const editor = grapesjs.init({
      container: "#gjs",
      allowScripts: 1,
      plugins: [exportPlugin, gjsPresetWebpage, heroImage, heroImage2, headerArea, callsToAction],
      pluginsOpts: {
        gjsPresetWebpage,
        heroImage,
        heroImage2,
        headerArea,
        callsToAction,
        exportPlugin

      },
      canvas: {
        styles: [
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
        ],
        scripts: [
          'https://code.jquery.com/jquery-3.3.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js',
          'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js'
        ],
      },
      storageManager: {
        type: 'remote',
          options: {
              remote: {
                urlLoad: `http://localhost:5000/grapes/v1/page/${page_id}`,
                urlStore: `http://localhost:5000/grapes/v1/page/${page_id}`,
                onStore: data => ({ id: page_id, data }),
                onLoad: result => result.data,
              }
          }
      },
      // Model definition
      model: {
        // Default properties
        defaults: {
          tagName: 'input',
          draggable: 'form, form *', // Can be dropped only inside `form` elements
          droppable: false, // Can't drop other elements inside
          attributes: { // Default attributes
            type: 'text',
            name: 'default-name',
            placeholder: 'Insert text here',
          },
          traits: [
            'name',
            'placeholder',
            { type: 'checkbox', name: 'required' },
          ],
        }
      }
  
      
    });
    
    // Add the button
    editor.Panels.addButton('options', [{ 
      id: 'save-db', 
      className: 'publishBtn', 
      command: 'save-db',
      attributes: {title: 'Save DB'},
      command: {
        run: function (editor) {
          editor.runCommand('gjs-export-zip');  
        },
        stop: function (editor) {

        }
    }
    }]);
    
    editor.on('run:gjs-export-zip', () => {
      console.log('Export Template')
    });
    
    setTimeout(() => {
      let categories = editor.BlockManager.getCategories();
      categories.forEach(category => category.set('open', false))
    }, "200")

    editor.BlockManager.add('tierOneContainer',{
      category: {
        label:'Tier 1 Modules',
        order: -1, //===>Adjust accordingly
        open: false
      }

    });
    
    function heroImage(editor){
      editor.BlockManager.add('hero-image', {
       
        label: 'Hero Section',
        media: '<div style = "margin-left: auto; margin-right: auto; width: 60%;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 352h448V64H64V352zM80 80h416v256h-416V80zM528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h180.9l-26.67 80H136C131.6 496 128 499.6 128 504S131.6 512 136 512h304c4.406 0 8-3.578 8-8s-3.594-8-8-8h-66.21l-26.67-80H528c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM356.9 496H219.1l26.67-80h84.46L356.9 496zM560 368c0 17.64-14.36 32-32 32h-480c-17.64 0-32-14.36-32-32v-320c0-17.64 14.36-32 32-32h480c17.64 0 32 14.36 32 32V368z"/></svg></div>',
        category: 'Tier 1 Modules',
        content: heroImage_1,
      });
    }
    function heroImage2(editor){
      editor.BlockManager.add('hero-image2', {
       
        label: 'Hero Section 2',
        media: '<div style = "margin-left: auto; margin-right: auto; width: 60%;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M64 352h448V64H64V352zM80 80h416v256h-416V80zM528 0h-480C21.5 0 0 21.5 0 48v320C0 394.5 21.5 416 48 416h180.9l-26.67 80H136C131.6 496 128 499.6 128 504S131.6 512 136 512h304c4.406 0 8-3.578 8-8s-3.594-8-8-8h-66.21l-26.67-80H528c26.5 0 48-21.5 48-48v-320C576 21.5 554.5 0 528 0zM356.9 496H219.1l26.67-80h84.46L356.9 496zM560 368c0 17.64-14.36 32-32 32h-480c-17.64 0-32-14.36-32-32v-320c0-17.64 14.36-32 32-32h480c17.64 0 32 14.36 32 32V368z"/></svg></div>',
        category: 'Tier 1 Modules',
        content: heroImage_2,
      });
    }
    function headerArea(editor){
      editor.BlockManager.add('headerArea', {
        label: 'Nav Bar',
        media: '<div style = "margin-left: auto; margin-right: auto; width: 60%;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 88C0 83.58 3.582 80 8 80H440C444.4 80 448 83.58 448 88C448 92.42 444.4 96 440 96H8C3.582 96 0 92.42 0 88zM0 248C0 243.6 3.582 240 8 240H440C444.4 240 448 243.6 448 248C448 252.4 444.4 256 440 256H8C3.582 256 0 252.4 0 248zM440 416H8C3.582 416 0 412.4 0 408C0 403.6 3.582 400 8 400H440C444.4 400 448 403.6 448 408C448 412.4 444.4 416 440 416z"/></svg></div>',
        category: 'Tier 1 Modules',
        content: blockCode,
      });
    }
    
    function callsToAction(editor)
    {
      editor.BlockManager.add('callsToAction', {
        label: 'CTAS',
        media: '<div style = "margin-left: auto; margin-right: auto; width: 60%;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M0 88C0 83.58 3.582 80 8 80H440C444.4 80 448 83.58 448 88C448 92.42 444.4 96 440 96H8C3.582 96 0 92.42 0 88zM0 248C0 243.6 3.582 240 8 240H440C444.4 240 448 243.6 448 248C448 252.4 444.4 256 440 256H8C3.582 256 0 252.4 0 248zM440 416H8C3.582 416 0 412.4 0 408C0 403.6 3.582 400 8 400H440C444.4 400 448 403.6 448 408C448 412.4 444.4 416 440 416z"/></svg></div>',
        category: 'Tier 1 Modules',
        content: ctas,
      });
    }
    

   
    
    }, [location.state.id]);

    function getPageState()
    {
      /* const theData = editor.loadProjectData(); */
      console.log(editor.getHtml())
      console.log(localStorage)
/*       console.log(theData); */
/*       console.log(localStorage) */
    }
    
    return (
      <div className="App">

        <div id="gjs">

        </div>
      </div>
    );  
  }

  export default CMS;
